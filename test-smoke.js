// Functional smoke test — NOT a mock rehearsal. Loads the real index.html,
// the real js/supabase-client.js, the real js/app.js, and runs the real
// init(). Only the network boundary (the supabase-js client itself) is
// stubbed, with a faithful chainable/thenable fake, so every line of our
// own code — data mapping, render functions, submit handlers, error
// paths — executes for real.
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { createCanvas } = require('canvas');

const NOW = new Date();
function ds(offsetDays) {
  const d = new Date(NOW); d.setDate(d.getDate() + offsetDays);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

let failures = 0;
function assert(cond, msg) {
  if (!cond) { failures++; console.error('FAIL:', msg); }
  else console.log('ok  :', msg);
}

// ── Fake Supabase client: a generic chainable + thenable proxy per call,
// resolving to per-table sample data. Mirrors real supabase-js's fluent
// query builder closely enough to exercise our actual code paths. ──
function makeChain(getResult) {
  let single = false;
  const proxy = new Proxy({}, {
    get(target, prop) {
      if (prop === 'then') {
        return (res, rej) => {
          let out = getResult();
          if (single) out = { ...out, data: Array.isArray(out.data) ? (out.data[0] || null) : out.data };
          return Promise.resolve(out).then(res, rej);
        };
      }
      if (prop === 'catch') return (fn) => Promise.resolve(getResult()).catch(fn);
      if (prop === 'single' || prop === 'maybeSingle') { single = true; return () => proxy; }
      return (..._args) => proxy; // select/eq/order/limit/gte/in/etc all just chain
    }
  });
  return proxy;
}

const SAMPLE = {
  profiles: [{ id: 'uid-1', display_name: 'Vecino Test', phone: '+529811234567', is_admin: true }],
  noticias: [{ id: 'n1', headline: 'Titular de prueba', summary: 'Resumen', thumbnail_url: '', source_name: 'Reportero X', source_url: 'https://example.com', published_at: NOW.toISOString(), status: 'published' }],
  eventos: [{ id: 'e1', title: 'Evento de prueba', category: 'Cultura', event_date: ds(1), event_time: '7:00 PM', location: 'Centro', status: 'published' }],
  productos: [{ id: 'p1', business_name_snapshot: 'Negocio Test', title: 'Producto test', category: 'Comida', price_mxn: 150, image_url: '', featured: true, status: 'published' }],
  clasificados: [{ id: 'c1', title: 'Artículo test', category: 'Hogar', price_mxn: 300, image_url: '', status: 'published', profiles: { display_name: 'Ricardo T.' } }],
  ofertas: [{ id: 'o1', business_name_snapshot: 'Negocio Oferta', title: 'Oferta test', price_was: 200, price_now: 100, quantity_total: 5, is_premium: false, image_url: '', status: 'published', created_at: NOW.toISOString(), ofertas_bookings: [{ booked_date: ds(0) }] }],
  ofertas_redemptions: [],
  ofertas_bookings: [{ booked_date: ds(1) }, { booked_date: ds(2) }],
  perdidos: [{ id: 'pf1', report_type: 'perdido', title: 'Gato test', description: 'desc', location: 'Zona test', image_url: '' }],
  alertas: [{ id: 'al1', alert_type: 'Corte de agua', zone: 'Zona test', description: 'desc', resolved: false, created_at: NOW.toISOString() }],
  empleos: [{ id: 'j1', title: 'Puesto test', company: 'Empresa test', pay: '$300/día', tags: ['Tiempo completo'] }],
  reportes: [{ id: 'r1', category: 'Bache', title: 'Bache test', location_text: 'Calle test', description: 'desc', resolved: false, created_at: NOW.toISOString() }],
  reportes_confirmations: [],
  avisos: [{ id: 'av1', category: 'Comunidad', title: 'Aviso test', description: 'desc', contact_info: '981 000 0000', created_at: NOW.toISOString(), profiles: { display_name: 'Vecina Test' }, rejection_reason: 'La descripción no es clara' }],
};

// Businesses needs REAL stateful behavior (starts as "no business", becomes
// "has a business" after a real verifyBusiness() insert) — unlike the other
// tables above, which are static read-only fixtures for these tests.
let currentBusiness = null;

// Mutable from outside the eval'd scope (unlike `MC`/`sb`, which are
// let/const bindings private to that eval call and unreachable as
// window.MC — this object reference, by contrast, IS shared, since the
// eval'd code's `sb` variable points at this exact same object) —
// lets the error-path tests below force a real Postgres-shaped error
// through the REAL MC.submitAviso/claimOferta code, rather than
// monkey-patching those functions out of the test.
const forcedErrors = { insert: {}, delete: {}, update: {} };

let currentSession = { user: { id: 'uid-1', is_anonymous: true, email: null } };
let refreshSessionCallCount = 0;
Object.assign(forcedErrors, { updateUser: null, signIn: null });

const lastInsert = {};
const lastUpdate = {};

const fakeClient = {
  auth: {
    getSession: async () => ({ data: { session: currentSession } }),
    signInAnonymously: async () => {
      currentSession = { user: { id: 'uid-1', is_anonymous: true, email: null } };
      return { data: { user: currentSession.user }, error: null };
    },
    updateUser: async ({ email, password, data }) => {
      if (forcedErrors.updateUser) return { data: null, error: forcedErrors.updateUser };
      currentSession = { user: { id: 'uid-1', is_anonymous: false, email } };
      return { data: { user: currentSession.user }, error: null };
    },
    refreshSession: async () => { refreshSessionCallCount++; return { data: { session: currentSession }, error: null }; },
    signInWithPassword: async ({ email, password }) => {
      if (forcedErrors.signIn) return { data: null, error: forcedErrors.signIn };
      currentSession = { user: { id: 'uid-2', is_anonymous: false, email } };
      return { data: { user: currentSession.user }, error: null };
    },
    signOut: async () => { currentSession = null; return { error: null }; },
  },
  from(table) {
    if (table === 'businesses') {
      return {
        select: (..._a) => makeChain(() => ({ data: currentBusiness ? [currentBusiness] : [], error: null })),
        insert: (row) => { lastInsert.businesses = row; return makeChain(() => {
          if (forcedErrors.insert.businesses) return { data: null, error: forcedErrors.insert.businesses };
          if (currentBusiness) return { data: null, error: { code: '23505', message: 'duplicate key value violates unique constraint "businesses_profile_id_key"' } };
          currentBusiness = { ...row, id: 'biz-1', status: 'pending' }; // matches the real DB default
          return { data: [currentBusiness], error: null };
        }); },
        update: (row) => { lastUpdate.businesses = row; return makeChain(() => {
          if (currentBusiness) currentBusiness = { ...currentBusiness, ...row };
          return { data: currentBusiness ? [currentBusiness] : [], error: null };
        }); },
      };
    }
    return {
      select: (..._a) => makeChain(() => ({ data: SAMPLE[table] || [], error: null })),
      insert: (row) => { lastInsert[table] = row; return makeChain(() => forcedErrors.insert[table]
        ? { data: null, error: forcedErrors.insert[table] }
        : { data: [{ ...row, id: 'new-' + Math.random().toString(36).slice(2) }], error: null }); },
      delete: () => makeChain(() => forcedErrors.delete[table]
        ? { data: null, error: forcedErrors.delete[table] }
        : { data: [], error: null }),
      update: (row) => { lastUpdate[table] = row; return makeChain(() => forcedErrors.update[table]
        ? { data: null, error: forcedErrors.update[table] }
        : { data: [row], error: null }); },
    };
  },
  rpc: async (_name, args) => ({ data: (args.p_oferta_ids || []).map(id => ({ oferta_id: id, claimed: 2 })), error: null }),
  storage: {
    from: (bucket) => ({
      upload: async (uploadPath, blob, opts) => {
        lastInsert.storageUpload = { bucket, path: uploadPath, size: blob.size, type: blob.type, contentType: opts && opts.contentType };
        if (forcedErrors.storageUpload) return { data: null, error: forcedErrors.storageUpload };
        return { data: { path: uploadPath }, error: null };
      },
      getPublicUrl: (uploadPath) => ({ data: { publicUrl: `https://fake-storage.test/${bucket}/${uploadPath}` } }),
    }),
  },
};

(async () => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://micampeche.app/', resources: 'usable', pretendToBeVisual: true });
  const { window } = dom;

  window.supabase = { createClient: () => fakeClient };
  // JSDOM's fetch/geolocation/etc aren't needed by our code; navigator.userAgent
  // defaults to jsdom's own UA, which isMobile() will read as "desktop" — fine,
  // both branches of that logic are trivial and not what we're testing here.

  const clientCode = fs.readFileSync(path.join(__dirname, 'js/supabase-client.js'), 'utf8');
  const appCode = fs.readFileSync(path.join(__dirname, 'js/app.js'), 'utf8');

  let thrown = null;
  try {
    // NOTE: separate window.eval() calls each get their own lexical
    // environment for top-level let/const (indirect eval is scoped that
    // way per spec) — unlike real <script> tags, which genuinely share
    // one global lexical scope. Concatenating into a single eval call
    // reproduces the real production behavior for this test.
    window.eval(clientCode + '\n' + appCode); // ends with init() being called
  } catch (err) {
    thrown = err;
  }
  assert(!thrown, 'app.js + supabase-client.js evaluated without throwing' + (thrown ? ': ' + thrown.stack : ''));

  // init() is async (fires loadAllData in the background) — give its
  // promise chain real turns of the event loop to actually settle.
  await new Promise(r => setTimeout(r, 200));

  const doc = window.document;
  const text = (id) => { const el = doc.getElementById(id); return el ? el.innerHTML : null; };
  const moderationQueueCountFromTitle = (title) => { const m = /\((\d+)\)/.exec(title || ''); return m ? Number(m[1]) : null; };

  assert(text('news-list') && text('news-list').includes('Titular de prueba'), 'Noticias rendered real fetched data');
  assert(text('evt-list') && text('evt-list').includes('Evento de prueba'), 'Eventos rendered real fetched data');
  assert(text('mkt-grid') && text('mkt-grid').includes('Producto test'), 'Tienda/Mercado rendered real productos row');
  assert(text('clas-grid') && text('clas-grid').includes('Artículo test') && text('clas-grid').includes('Ricardo T.'), 'Clasificados rendered real row with joined profile name');
  assert(text('of-list') && text('of-list').includes('Oferta test') && text('of-list').includes('reclamados'), 'Ofertas rendered with real claim count wired in');
  assert(text('pf-list') && text('pf-list').includes('Gato test'), 'Perdidos rendered real fetched data');
  assert(text('alert-list') && text('alert-list').includes('Corte de agua'), 'Alertas rendered real fetched data');
  assert(text('job-list') && text('job-list').includes('Puesto test'), 'Empleos rendered real fetched data');
  assert(text('rep-list') && text('rep-list').includes('Bache test') && text('rep-list').includes('confirmaron'), 'Reportes rendered with real confirm count wired in');
  assert(text('av-list') && text('av-list').includes('Aviso test') && text('av-list').includes('Vecina Test'), 'Avisos rendered real row with joined author name');

  // Anonymous visitors must be gated before ANY posting or interactive
  // action — no more silent "ride the anonymous session" behavior.
  try {
    window.openPost('avisos');
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Inicia sesión para continuar', 'an anonymous visitor tapping "+" gets the sign-in gate, not the real Avisos form');
    assert(text('modal-body').includes('cuenta'), 'the gate explains an account is needed');
  } catch (err) {
    assert(false, 'sign-in gate for avisos threw: ' + err.stack);
  }

  try {
    await window.toggleClaim('o1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Inicia sesión para continuar', 'an anonymous visitor tapping claim on an Oferta also gets gated, not silently claimed');
  } catch (err) {
    assert(false, 'sign-in gate for toggleClaim threw: ' + err.stack);
  }

  // The gate should cascade correctly: tapping "+" while anonymous, then
  // actually signing up, should land directly in the form originally
  // requested — not just a generic "you're signed in now" dead end.
  try {
    window.openPost('avisos');
    await new Promise(r => setTimeout(r, 20));
    await window.openAccount(); // the gate's own button does this — showing the real form
    doc.getElementById('acct-name').value = 'Gate Test';
    doc.getElementById('acct-email').value = 'gate-test@example.com';
    doc.getElementById('acct-phone').value = '981 000 1111';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Publicar un aviso', 'signing up from the gate resumes directly into the originally-requested Avisos form, not just closing');
    await window.doSignOut(); // back to anonymous for the rest of the account-flow tests below
    await new Promise(r => setTimeout(r, 20));
  } catch (err) {
    assert(false, 'gate → signup → resume cascade threw: ' + err.stack);
  }

  // ── Account flow: signup, signed-in view, sign-out — all through the
  // real openAccount/submitAuth/doSignOut, never touching MC directly. ──
  try {
    await window.openAccount();
    assert(text('modal-title') === 'Crear cuenta', 'openAccount() while anonymous shows the signup form, not a signed-in view');
    assert(!!doc.getElementById('acct-phone'), 'signup form includes the (now required) phone field');
    assert(doc.getElementById('acct-phone-cc').value === '52', 'country-code selector defaults to Mexico (+52)');

    // Phone validation: too short / missing should block signup entirely.
    doc.getElementById('acct-name').value = 'Sin Telefono';
    doc.getElementById('acct-email').value = 'sintelefono@example.com';
    doc.getElementById('acct-phone').value = '981';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Ingresa un número de teléfono válido', 'signup with too-short phone is blocked, not silently accepted');
    assert(text('modal-title') === 'Crear cuenta', 'blocked signup leaves the form open rather than closing the modal');

    // Switching the country selector should change the combined number
    // actually sent to Supabase, not just be cosmetic. Checked directly
    // against what MC.signUp really sent, not a fixture guess.
    doc.getElementById('acct-phone-cc').value = '1';
    doc.getElementById('acct-phone').value = '415 555 0100';
    doc.getElementById('acct-email').value = 'us-test@example.com';
    doc.getElementById('acct-name').value = 'US Test';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(lastUpdate.profiles && lastUpdate.profiles.phone === '+14155550100', 'selecting United States (+1) combines into +14155550100, not the Mexico default');

    await window.doSignOut(); // reset back to a fresh anonymous session before the main signup test below
    await new Promise(r => setTimeout(r, 20));

    doc.getElementById('acct-name').value = 'Ricardo Martín';
    doc.getElementById('acct-email').value = 'ricardo@example.com';
    doc.getElementById('acct-phone-cc').value = '52';
    doc.getElementById('acct-phone').value = '981 123 4567';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === '¡Cuenta creada! Ya tienes sesión iniciada ✓', 'submitAuth() in signup mode → real MC.signUp → success toast');
    assert(lastUpdate.profiles && lastUpdate.profiles.phone === '+529811234567', 'Mexico (+52) default combines correctly too');
    assert(refreshSessionCallCount >= 1, 'signup forces a session refresh so the JWT drops the stale is_anonymous:true claim — without this, every new signup would fail on their very first authenticated action afterward (e.g. verifying a business) with a permission error');

    await window.openAccount();
    assert(text('modal-body').includes('ricardo@example.com'), 'openAccount() after signup shows the signed-in view with the real email');
    assert(text('modal-body').includes('+529811234567'), 'signed-in view shows the phone in international (+52…) format');
    assert(text('modal-body').includes('Cerrar sesión'), 'signed-in view offers sign-out');

    // Now that a real account exists, exercise the actual submit path
    // (real MC.submitAviso → fake insert → real toast handling) — these
    // used to run anonymously before the sign-in gate existed; moved here
    // to run in the auth context they now actually require.
    await window.openPost('avisos');
    doc.getElementById('pf-title').value = 'Prueba de envío';
    doc.getElementById('pf-desc').value = 'Contenido de prueba';
    doc.getElementById('pf-contact').value = '981 111 2222';
    await window.submitPost('avisos');
    await new Promise(r => setTimeout(r, 50));
    assert(text('toast') === 'Enviado — en revisión antes de publicarse ✓', 'submitPost(avisos) → real MC.submitAviso → success toast');

    // Claim/unclaim mechanics, now as a real signed-in user.
    const beforeHtml = text('of-list');
    await window.toggleClaim('o1');
    await new Promise(r => setTimeout(r, 50));
    assert(text('of-list') !== beforeHtml, 'toggleClaim() actually changed rendered state (optimistic update path ran)');

    // ── Error paths: the newest, most bespoke logic (friendly toasts +
    // optimistic-UI rollback), so worth testing deliberately. ──
    forcedErrors.insert.avisos = { code: '23505', message: 'duplicate key value violates unique constraint "one_aviso_per_person_per_day"' };
    await window.openPost('avisos');
    doc.getElementById('pf-title').value = 'Segundo aviso';
    await window.submitPost('avisos');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Ya publicaste un aviso hoy — puedes publicar otro mañana.', 'duplicate-submission error (through the REAL MC.submitAviso) maps to the correct friendly Spanish toast, not a generic one');
    forcedErrors.insert.avisos = null;

    forcedErrors.insert.ofertas_redemptions = { code: '23505', message: 'duplicate key value violates unique constraint "one_claim_per_person_per_oferta"' };
    forcedErrors.delete.ofertas_redemptions = { code: '23505', message: 'duplicate key value violates unique constraint "one_claim_per_person_per_oferta"' };
    const beforeClaim = text('of-list');
    await window.toggleClaim('o1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('of-list') === beforeClaim, 'toggleClaim() (through the REAL MC.claimOferta/unclaimOferta) rolled back the optimistic UI update after a failed write, instead of leaving it stuck');
    assert(text('toast') === 'Ya habías reclamado esta oferta.', 'claim-toggle failure surfaced the correct friendly toast');
    forcedErrors.insert.ofertas_redemptions = null;
    forcedErrors.delete.ofertas_redemptions = null;

    // Perdidos has no manual contact field — while signed in, the submitted
    // row should carry the account's phone automatically.
    await window.openPost('perdidos');
    doc.getElementById('pf-name').value = 'Gato perdido de prueba';
    await window.submitPost('perdidos');
    await new Promise(r => setTimeout(r, 20));
    assert(lastInsert.perdidos && lastInsert.perdidos.contact_info === '+529811234567', 'Perdidos submission auto-fills contact_info from the signed-in account\'s phone, with no form field for it');

    // Avisos DOES have a manual contact field, but it should arrive
    // pre-filled with the account's phone once signed in.
    await window.openPost('avisos');
    assert(doc.getElementById('pf-contact').value === '+529811234567', 'Avisos contact field is pre-filled from the account\'s phone for a signed-in user');

    // ── Business verification: a capability an account HAS, not a
    // different kind of account. Clasificados stays open to everyone;
    // Producto/Oferta require verifying first. ──
    await window.openPost('clasificado');
    assert(text('modal-title') === 'Publicar en Clasificados', 'Clasificados stays open with no business required — no gate at all');

    await window.openPost('producto');
    assert(text('modal-title') === 'Verifica tu negocio', 'Producto is gated behind business verification when none exists yet');
    assert(text('modal-body').includes('Vender en Tienda'), 'the gate explains which capability needs verification');

    await window.openPost('negocio_verificar');
    assert(text('modal-title') === 'Verifica tu negocio' && !!doc.getElementById('pf-address'), 'the real verification form (not just the prompt) renders with its fields');

    doc.getElementById('pf-name').value = 'Taco Loco';
    doc.getElementById('pf-address').value = 'Calle 10 #123';
    doc.getElementById('pf-phone').value = '981 555 0000';
    doc.getElementById('pf-cat').value = 'Comida';
    await window.submitPost('negocio_verificar');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Tu negocio fue enviado para revisión ✓', 'verification submission shows a "sent for review" toast, not instant approval');
    assert(lastInsert.businesses && lastInsert.businesses.business_name === 'Taco Loco', 'the real business data was sent to Supabase');
    assert(text('modal-title') === 'Negocio en revisión', 'resuming into Producto after submitting shows the pending-review state, NOT the real form — verification alone no longer grants access');

    // Oferta should show the same pending state, not the real form either.
    await window.openPost('oferta');
    assert(text('modal-title') === 'Negocio en revisión', 'Oferta also shows pending-review state while the business awaits admin approval');

    await window.openAccount();
    assert(text('modal-body').includes('En revisión'), 'account view shows the pending-review label before approval');
    assert(!text('modal-body').includes('Actualizar a Premium'), 'Premium upsell is hidden until the business is actually approved');

    // Simulate what actually unlocks posting: an admin approving the
    // business through the moderation queue (status → published).
    currentBusiness.status = 'published';
    await window.openPost('producto');
    assert(text('modal-title') === 'Publicar un producto', 'once an admin approves the business, Producto opens the real form');

    // ── Real image upload: replaces the old fake Google Form placeholder,
    // which never once actually populated image_url. Uses a real
    // 2000x1000 JPEG (via node-canvas) run through the REAL resize
    // pipeline (FileReader → Image decode → canvas draw → toBlob) — not
    // a bypass of it — then the real MC.uploadImage() against the fake
    // Storage client. ──
    {
      const srcCanvas = createCanvas(2000, 1000);
      const cctx = srcCanvas.getContext('2d');
      cctx.fillStyle = 'green'; cctx.fillRect(0, 0, 2000, 1000);
      const jpegBuffer = srcCanvas.toBuffer('image/jpeg');
      const testFile = new window.File([jpegBuffer], 'test.jpg', { type: 'image/jpeg' });

      await window.handlePhotoSelect({ files: [testFile] }, 'photo');
      await new Promise(r => setTimeout(r, 100)); // real async decode + resize + fake upload

      assert(!!lastInsert.storageUpload, 'a real upload actually reached the (fake) Storage client, through the real resize pipeline');
      assert(lastInsert.storageUpload.bucket === 'uploads', 'uploads to the real "uploads" bucket');
      assert(lastInsert.storageUpload.path.startsWith('uid-1/'), 'the file path is scoped to the uploader\'s own folder, matching the real bucket RLS');
      assert(lastInsert.storageUpload.size < jpegBuffer.length, 'the resized/compressed blob is genuinely smaller than the original 2000x1000 source — the resize step actually did something, not a no-op');
      assert(doc.getElementById('pf-photo-wrap').innerHTML.includes('<img'), 'a real preview thumbnail renders after upload completes');

      doc.getElementById('pf-name').value = 'Producto con foto';
      await window.submitPost('producto');
      await new Promise(r => setTimeout(r, 20));
      assert(lastInsert.productos && lastInsert.productos.image_url && lastInsert.productos.image_url.startsWith('https://fake-storage.test/uploads/'), 'the real uploaded URL (not a placeholder string) ends up as image_url on the actual submission');
    }

    // Error path: a failed upload must revert to the upload button, not
    // leave it stuck showing "Subiendo…" forever.
    {
      await window.openPost('producto');
      forcedErrors.storageUpload = { message: 'simulated storage failure' };
      const srcCanvas2 = createCanvas(400, 400);
      srcCanvas2.getContext('2d').fillRect(0, 0, 400, 400);
      const testFile2 = new window.File([srcCanvas2.toBuffer('image/jpeg')], 'test2.jpg', { type: 'image/jpeg' });
      await window.handlePhotoSelect({ files: [testFile2] }, 'photo');
      await new Promise(r => setTimeout(r, 100));
      assert(text('toast') === 'No se pudo subir la foto — intenta de nuevo', 'a failed upload shows a clear error toast');
      assert(doc.getElementById('pf-photo-wrap').innerHTML.includes('photo-upload-btn') && !doc.getElementById('pf-photo-wrap').innerHTML.includes('<img'), 'a failed upload reverts to the real upload button, not stuck on "Subiendo…" or showing a broken preview');
      forcedErrors.storageUpload = null;
    }

    // Non-image file rejected before ever touching Storage.
    {
      await window.openPost('producto');
      const notImage = new window.File(['plain text'], 'note.txt', { type: 'text/plain' });
      delete lastInsert.storageUpload;
      await window.handlePhotoSelect({ files: [notImage] }, 'photo');
      await new Promise(r => setTimeout(r, 20));
      assert(text('toast') === 'Selecciona un archivo de imagen', 'a non-image file is rejected client-side with a clear message');
      assert(!lastInsert.storageUpload, 'a rejected non-image file never reaches the Storage upload call at all');
    }

    await window.openPost('oferta');
    assert(text('modal-title') === 'Publicar una Oferta', 'and so does Oferta, now that the business is actually approved');

    await window.openAccount();
    assert(text('modal-body').includes('Taco Loco'), 'the signed-in account view now shows the verified business');
    assert(text('modal-body').includes('Actualizar a Premium'), 'Premium upsell now appears since the business is approved');

    // Product cap error now routes to the real Premium upgrade prompt
    // (with the actual Stripe payment link), not a dead-end toast.
    forcedErrors.insert.productos = { code: 'P0001', message: 'product_cap_reached' };
    await window.openPost('producto');
    doc.getElementById('pf-name').value = 'Producto de prueba';
    await window.submitPost('producto');
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Actualiza a Premium', 'product cap error opens the real Premium upgrade prompt instead of a dead-end toast');
    assert(text('modal-body').includes('749'), 'the Premium prompt shows the real $749 MXN price');
    forcedErrors.insert.productos = null;

    // Ofertas: submitting a real (non-full) slot should NOT book
    // immediately anymore — it persists the pending submission and sends
    // the user to pay first. Confirmed here without actually navigating
    // (jsdom doesn't support real navigation; the persisted state is what
    // matters and is what the real return trip reads back).
    await window.openPost('oferta');
    doc.getElementById('pf-item').value = 'Oferta de prueba';
    doc.getElementById('pf-priceWas').value = '100';
    doc.getElementById('pf-priceNow').value = '50';
    const openSlot = doc.querySelector('.slot-day:not(.full)');
    assert(!!openSlot, 'the booking calendar rendered at least one open (non-full) day to pick');
    window.pickSlotDay(openSlot, false);
    const selectedDs = openSlot.dataset.ds;
    await window.submitPost('oferta');
    await new Promise(r => setTimeout(r, 20));
    const pendingRaw = window.sessionStorage.getItem('mc_pending_oferta');
    assert(!!pendingRaw, 'submitting an available Ofertas slot persists pending data instead of booking immediately (payment happens first)');
    const pending = JSON.parse(pendingRaw);
    assert(pending.data.item === 'Oferta de prueba' && pending.slotDs === selectedDs, 'the persisted pending data carries the real form fields and chosen date');

    // Simulate landing back from Stripe with ?paid=oferta — the real
    // return handler should pick up that same pending data and actually
    // complete the booking now, for real, through MC.submitOferta.
    window.history.pushState({}, '', '/?paid=oferta');
    await window.checkPaymentReturn();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === '¡Pago recibido y espacio reservado! En revisión antes de publicarse ✓', 'returning from a successful Stripe payment completes the real booking with the right toast');
    assert(!window.sessionStorage.getItem('mc_pending_oferta'), 'pending data is cleared after the booking completes, so a page refresh cannot re-submit it');
    assert(lastInsert.ofertas_bookings && lastInsert.ofertas_bookings.booked_date === selectedDs, 'the actual booking sent to Supabase carries the date chosen before payment, not something reconstructed incorrectly');

    // Now the cap-reached case ON RETURN — payment succeeded but the real
    // trigger rejects the booking (e.g. cap hit in the interim). Must
    // surface a specific, honest message, not a silent failure.
    await window.openPost('oferta');
    doc.getElementById('pf-item').value = 'Segunda oferta';
    doc.getElementById('pf-priceWas').value = '100';
    doc.getElementById('pf-priceNow').value = '50';
    const openSlot2 = doc.querySelector('.slot-day:not(.full)');
    window.pickSlotDay(openSlot2, false);
    await window.submitPost('oferta');
    await new Promise(r => setTimeout(r, 20));
    forcedErrors.insert.ofertas_bookings = { code: 'P0001', message: 'oferta_concurrent_slot_cap_reached' };
    window.history.pushState({}, '', '/?paid=oferta');
    await window.checkPaymentReturn();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Pago recibido, pero llegaste al límite de espacios de tu plan justo antes de que se confirmara. Escríbenos por WhatsApp — te ayudamos a resolverlo.', 'a cap-reached failure AFTER payment shows the specific, honest recovery message');
    forcedErrors.insert.ofertas_bookings = null;

    // Premium's return path: confirmation only — must NEVER self-grant
    // is_premium client-side. That stays a founder-verified, manual step.
    window.history.pushState({}, '', '/?paid=premium');
    delete lastUpdate.businesses; // clear any earlier business update from this test run
    await window.checkPaymentReturn();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === '¡Pago recibido! Activaremos tu cuenta Premium en breve.', 'Premium payment return shows a confirmation, not an immediate upgrade');
    assert(!lastUpdate.businesses, 'returning from a Premium payment never calls a client-side update to is_premium — that stays a manual, founder-verified step');

    // ── Admin moderation queue (this fixture account is_admin: true) ──
    await window.openAccount();
    assert(text('modal-body').includes('Moderación'), 'signed-in admin sees the Moderación entry point (a non-admin would not)');

    await window.openModeration();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Moderación (10)', 'queue aggregates one pending item from each of the 9 content tables plus business verification requests');
    assert(!text('modal-body').includes('Aprobar') && !text('modal-body').includes('Rechazar'), 'the LIST no longer has blind approve/reject buttons — reviewing detail is required first');

    // Tapping an item opens its full detail — real submitted fields, not
    // just the title, so a decision can actually be informed.
    window.openModerationDetail('avisos', 'av1');
    assert(text('modal-title') === 'Aviso', 'opening an item shows its detail screen');
    assert(text('modal-body').includes('desc') && text('modal-body').includes('981 000 0000'), 'the detail view shows the REAL submitted fields (description, contact), not just the title from the list');
    assert(text('modal-body').includes('Aprobar') && text('modal-body').includes('Rechazar'), 'approve/reject actions live on the detail screen now, after review');

    // Reject without a reason must be blocked — the whole point is that a
    // reason always reaches the submitter, not sometimes.
    window.openRejectReasonPrompt('avisos', 'av1');
    assert(text('modal-title') === 'Motivo del rechazo', 'rejecting opens a dedicated reason screen instead of rejecting immediately');
    await window.confirmReject('avisos', 'av1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Escribe un motivo breve antes de rechazar', 'an empty rejection reason is blocked, not silently accepted');
    assert(text('modal-title') === 'Motivo del rechazo', 'blocked rejection stays on the reason screen rather than proceeding anyway');

    doc.getElementById('reject-reason-input').value = 'La foto no es clara';
    await window.confirmReject('avisos', 'av1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Rechazado — el motivo quedó guardado', 'a real rejection reason succeeds with a toast confirming it was saved');
    assert(lastUpdate.avisos && lastUpdate.avisos.status === 'rejected' && lastUpdate.avisos.rejection_reason === 'La foto no es clara', 'the actual typed reason is sent to Supabase on the same row, not discarded');
    assert(text('modal-title') === 'Moderación (9)', 'rejected item is removed from the queue and the count updates');

    // Approve, now via the detail screen (not the list).
    window.openModerationDetail('noticias', 'n1');
    await window.moderateItem('noticias', 'n1', 'published');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Publicado ✓', 'approving from the detail screen shows the right confirmation toast');
    assert(lastUpdate.noticias && lastUpdate.noticias.status === 'published', 'approval actually sent status: published to Supabase');

    // Reject, with a genuinely forced failure — item must stay in the
    // queue and show the real error, not silently vanish either way.
    forcedErrors.update.eventos = { code: '42501', message: 'simulated failure' };
    const beforeCount = moderationQueueCountFromTitle(text('modal-title'));
    await window.moderateItem('eventos', 'e1', 'rejected', 'motivo de prueba');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'No tienes permiso para hacer esto — intenta de nuevo en un momento.', 'a failed reject shows the real error toast');
    assert(moderationQueueCountFromTitle(text('modal-title')) === beforeCount, 'a failed reject leaves the item in the queue rather than removing it anyway');
    forcedErrors.update.eventos = null;

    // The submitter should actually be able to see why something was
    // rejected — surfaced in their own account view, not just stored and
    // forgotten in the database.
    await window.openAccount();
    assert(text('modal-body').includes('Publicaciones no aprobadas'), 'account view surfaces rejected submissions to the person who sent them');
    assert(text('modal-body').includes('La descripción no es clara'), 'the actual rejection reason text is shown, not just that something was rejected');

    await window.doSignOut();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Sesión cerrada ✓', 'doSignOut() → real MC.signOut → confirmation toast');

    await window.openAccount();
    assert(text('modal-title') === 'Crear cuenta', 'after sign-out, a fresh anonymous session is active again (openAccount shows signup, not signed-in)');
  } catch (err) {
    assert(false, 'account flow threw: ' + err.stack);
  }

  // Account error path: duplicate email on signup
  try {
    forcedErrors.updateUser = { message: 'User already registered' };
    await window.openAccount();
    doc.getElementById('acct-name').value = 'Otra Persona';
    doc.getElementById('acct-email').value = 'ya@existe.com';
    doc.getElementById('acct-phone').value = '981 999 8888';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Ya existe una cuenta con ese correo — intenta iniciar sesión en vez de crear una nueva.', 'duplicate-email signup maps to the correct friendly toast');
  } catch (err) {
    assert(false, 'account error-path threw: ' + err.stack);
  } finally {
    forcedErrors.updateUser = null;
  }

  console.log('\n' + (failures === 0 ? `ALL PASSED` : `${failures} FAILURE(S)`));
  process.exit(failures === 0 ? 0 : 1);
})();
