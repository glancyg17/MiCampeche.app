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
  // profiles moved to a stateful currentProfile object below — see the
  // special-cased 'profiles' handling in from(), needed for real
  // approve/reject/edit-account testing.
  noticias: [{ id: 'n1', headline: 'Titular de prueba', summary: 'Resumen', thumbnail_url: '', source_name: 'Reportero X', source_url: 'https://example.com', published_at: NOW.toISOString(), status: 'published' }],
  eventos: [{ id: 'e1', title: 'Evento de prueba', category: 'Cultura', event_date: ds(1), event_time: '7:00 PM', location: 'Centro', description: 'Descripción larga del evento de prueba', image_url: 'https://example.com/cartel.jpg', website: 'https://example.com/evento', contact_phone: '981 555 1234', price_text: '$150', source: 'user', status: 'published' }],
  productos: [{ id: 'p1', business_name_snapshot: 'Negocio Test', title: 'Producto test', category: 'Comida', price_mxn: 150, price_text: null, image_url: '', featured: true, status: 'published', item_condition: 'nuevo', availability: 'ahora', lead_time: null, fulfillment: 'recoger', seller_phone: '981 100 2000', contact_methods: ['whatsapp', 'llamada'] }],
  clasificados: [{ id: 'c1', title: 'Artículo test', category: 'Hogar', price_mxn: 300, price_text: null, image_url: '', status: 'published', profiles: { display_name: 'Ricardo T.' }, item_condition: 'usado', fulfillment: 'ambos', zone: 'Centro', contact_phone: '981 300 4000', contact_methods: ['whatsapp'] }],
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
let currentProfile = { id: 'uid-1', display_name: 'Vecino Test', phone: '+529811234567', is_admin: true, phone_verification_status: 'pending', phone_verification_reason: null };
let fakePhoneAlreadyVerified = false; // controllable flag for MC.isPhoneAlreadyVerified — defaults to "no match" so normal signup/edit tests aren't blocked by a false positive

// Mutable from outside the eval'd scope (unlike `MC`/`sb`, which are
// let/const bindings private to that eval call and unreachable as
// window.MC — this object reference, by contrast, IS shared, since the
// eval'd code's `sb` variable points at this exact same object) —
// lets the error-path tests below force a real Postgres-shaped error
// through the REAL MC.submitAviso/claimOferta code, rather than
// monkey-patching those functions out of the test.
const forcedErrors = { insert: {}, delete: {}, update: {}, resetPassword: null, requestPasswordReset: null, profilesUpdateFailOnce: false, profilesUpdateAlways: false };

let currentSession = { user: { id: 'uid-1', is_anonymous: true, email: null } };
let refreshSessionCallCount = 0;
let authStateChangeCallback = null;
let fakePasswordResetRequests = [];
let fakeResetIdCounter = 0;
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
      // Preserve the existing email when only a password is sent (the
      // real password-reset-completion flow does exactly this) — only
      // overwrite it when a new one is actually provided (real signup).
      const existingEmail = currentSession && currentSession.user ? currentSession.user.email : null;
      currentSession = { user: { id: 'uid-1', is_anonymous: false, email: email !== undefined ? email : existingEmail } };
      return { data: { user: currentSession.user }, error: null };
    },
    refreshSession: async () => { refreshSessionCallCount++; return { data: { session: currentSession }, error: null }; },
    signInWithPassword: async ({ email, password }) => {
      if (forcedErrors.signIn) return { data: null, error: forcedErrors.signIn };
      currentSession = { user: { id: 'uid-2', is_anonymous: false, email } };
      return { data: { user: currentSession.user }, error: null };
    },
    signOut: async () => { currentSession = null; return { error: null }; },
    resetPasswordForEmail: async (_email, _opts) => {
      if (forcedErrors.resetPassword) return { data: null, error: forcedErrors.resetPassword };
      return { data: {}, error: null };
    },
    onAuthStateChange: (cb) => { authStateChangeCallback = cb; return { data: { subscription: { unsubscribe: () => {} } } }; },
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
    if (table === 'password_reset_requests') {
      return {
        select: (..._a) => makeChain(() => ({
          data: fakePasswordResetRequests.filter(r => r.status === 'pending').map(r => ({
            ...r,
            profiles: r.claimed_email === 'ricardo@example.com' ? { display_name: 'Ricardo Martín', phone: '+529811234567' } : null,
          })),
          error: null,
        })),
      };
    }
    if (table === 'profiles') {
      return {
        select: (...selectArgs) => {
          const chain = makeChain(() => {
            const selectStr = selectArgs[0] ? String(selectArgs[0]) : '';
            if (selectStr === 'id') {
              // MC.isPhoneAlreadyVerified's exact shape — a dedicated
              // controllable flag, defaulting to "no match" so normal
              // signup/edit tests aren't blocked by a false positive.
              return { data: fakePhoneAlreadyVerified ? [{ id: 'some-other-uid' }] : [], error: null };
            }
            // fetchPendingPhoneVerifications filters by status — honor
            // that specifically so the admin list can be tested for real
            // (approve/reject actually removing the item), unlike most
            // other tables here which intentionally ignore filters.
            const wantsPendingOnly = selectStr.includes('created_at');
            const matches = wantsPendingOnly ? (currentProfile.phone_verification_status === 'pending') : true;
            return { data: matches ? [currentProfile] : [], error: null };
          });
          return chain;
        },
        update: (row) => { lastUpdate.profiles = row; return makeChain(() => {
          if (forcedErrors.profilesUpdateFailOnce) {
            forcedErrors.profilesUpdateFailOnce = false; // simulates a transient failure that succeeds on retry
            return { data: null, error: { message: 'simulated transient failure' } };
          }
          if (forcedErrors.profilesUpdateAlways) {
            return { data: null, error: { message: 'simulated persistent failure' } };
          }
          Object.assign(currentProfile, row);
          return { data: [currentProfile], error: null };
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
  rpc: async (name, args) => {
    if (name === 'get_ofertas_claim_counts') {
      return { data: (args.p_oferta_ids || []).map(id => ({ oferta_id: id, claimed: 2 })), error: null };
    }
    if (name === 'email_for_phone') {
      // login/reset resolve the typed phone to the account email; the
      // fixture account is Ricardo, phone +529811234567.
      const digits = (args.p_phone || '').replace(/\D/g, '');
      if (digits === '529811234567') return { data: 'ricardo@example.com', error: null };
      return { data: null, error: null };
    }
    if (name === 'request_password_reset') {
      if (forcedErrors.requestPasswordReset) return { data: null, error: forcedErrors.requestPasswordReset };
      fakeResetIdCounter++;
      const id = 'reset-req-' + fakeResetIdCounter;
      fakePasswordResetRequests.push({ id, claimed_email: args.p_email, status: 'pending', reset_code: null, attempt_count: 0 });
      return { data: id, error: null };
    }
    if (name === 'approve_password_reset') {
      const req = fakePasswordResetRequests.find(r => r.id === args.p_request_id);
      if (!req || req.status !== 'pending') return { data: null, error: { message: 'request_not_pending' } };
      req.reset_code = '123456';
      req.status = 'approved';
      return { data: req.reset_code, error: null };
    }
    if (name === 'reject_password_reset') {
      const req = fakePasswordResetRequests.find(r => r.id === args.p_request_id);
      if (req) req.status = 'rejected';
      return { data: null, error: null };
    }
    if (name === 'complete_password_reset') {
      const req = fakePasswordResetRequests.find(r => r.claimed_email === args.p_email && r.status === 'approved');
      if (!req) return { data: 'invalid_or_expired_code', error: null };
      if (req.reset_code !== args.p_code) { req.attempt_count++; return { data: 'invalid_or_expired_code', error: null }; }
      if (args.p_new_password.length < 6) return { data: 'password_too_short', error: null };
      req.status = 'completed';
      return { data: 'ok', error: null };
    }
    return { data: null, error: null };
  },
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
  let lastWindowOpenUrl = null;
  window.open = (url) => { lastWindowOpenUrl = url; return null; }; // jsdom's real open() just logs a warning and can't be inspected

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
  assert(text('evt-list').includes('example.com/cartel.jpg'), 'Event card shows its image thumbnail');
  assert(text('evt-list').includes("openEvento('e1')"), 'Event card is clickable through to its detail page');

  // ── Event detail page: full description, image, website + phone handoff ──
  window.openEvento('e1');
  const evd = text('evento-detail-body') || '';
  assert(doc.getElementById('scr-evento-detail').classList.contains('on'), 'openEvento navigates to the event detail screen');
  assert(evd.includes('example.com/cartel.jpg'), 'event detail shows the event image');
  assert(evd.includes('Descripción larga del evento de prueba'), 'event detail shows the full description');
  assert(evd.includes('de noviembre') || /\bde [a-zé]+ de 20\d\d/.test(evd), 'event detail shows a full human date');
  assert(evd.includes('https://example.com/evento'), 'event detail links out to the organizer website');
  assert(evd.includes('wa.me/529815551234') && evd.includes('tel:+529815551234'), 'event detail offers WhatsApp + call handoff to the organizer number');
  assert(evd.includes('Precio') && evd.includes('$150'), 'event detail shows the ticket price');
  assert(text('evt-list').includes('$150'), 'event card shows the ticket price');
  window.nav('inicio'); // restore the default screen for the pull-to-refresh test below
  assert(text('mkt-grid') && text('mkt-grid').includes('Producto test'), 'Tienda/Mercado rendered real productos row');
  assert(text('clas-grid') && text('clas-grid').includes('Artículo test') && text('clas-grid').includes('Ricardo T.'), 'Clasificados rendered real row with joined profile name');
  assert(text('of-list') && text('of-list').includes('Oferta test') && text('of-list').includes('reclamados'), 'Ofertas rendered with real claim count wired in');
  assert(text('pf-list') && text('pf-list').includes('Gato test'), 'Perdidos rendered real fetched data');
  assert(text('alert-list') && text('alert-list').includes('Corte de agua'), 'Alertas rendered real fetched data');
  assert(text('job-list') && text('job-list').includes('Puesto test'), 'Empleos rendered real fetched data');
  assert(text('rep-list') && text('rep-list').includes('Bache test') && text('rep-list').includes('confirmaron'), 'Reportes rendered with real confirm count wired in');
  assert(text('av-list') && text('av-list').includes('Aviso test') && text('av-list').includes('Vecina Test'), 'Avisos rendered real row with joined author name');

  // ── Pull to refresh: real simulated touch gestures (jsdom dispatches
  // the events fine; the code only reads e.touches[...] as plain
  // properties, so a constructed Event with a manually-attached .touches
  // array exercises the exact same code path a real finger would). ──
  try {
    const screensEl = doc.querySelector('.screens');
    const inicioScr = doc.getElementById('scr-inicio');
    const indicator = doc.getElementById('pull-indicator');

    function touch(type, clientY, cancelable) {
      const ev = new window.Event(type, { bubbles: true, cancelable: !!cancelable });
      ev.touches = [{ clientY }];
      screensEl.dispatchEvent(ev);
    }

    // A small pull (below the 70px threshold) should visually respond but
    // snap back WITHOUT triggering any refresh.
    touch('touchstart', 100);
    touch('touchmove', 140, true); // dy=40 → pullDistance=18, well under threshold
    assert(inicioScr.style.transform.includes('translateY'), 'a small pull down visibly moves the active screen (real gesture feedback, not just internal state)');
    assert(parseFloat(indicator.style.opacity) > 0, 'the pull indicator becomes visible during the gesture');
    touch('touchend', 140);
    await new Promise(r => setTimeout(r, 20));
    assert(inicioScr.style.transform === '', 'releasing below the threshold snaps back without refreshing');
    assert(!indicator.classList.contains('spinning'), 'no refresh was triggered by the small pull');

    // A real pull past the threshold should actually refresh — change the
    // underlying data first so a real re-fetch is provably what happened,
    // not just that some function got called.
    SAMPLE.noticias[0].headline = 'Titular actualizado por pull-to-refresh';
    touch('touchstart', 100);
    touch('touchmove', 300, true); // dy=200 → pullDistance capped at 100, over threshold
    assert(parseFloat(indicator.style.opacity) === 1, 'a strong pull shows the indicator at full opacity');
    touch('touchend', 300);
    await new Promise(r => setTimeout(r, 30));
    assert(text('news-list').includes('Titular actualizado por pull-to-refresh'), 'releasing past the threshold genuinely re-fetched content — the NEW headline actually appears, not the old cached one');
    assert(text('toast') === 'Este navegador no soporta actualizaciones automáticas', 'the update-check (checkForUpdates) genuinely ran too, as its own real code path (jsdom has no navigator.serviceWorker, so this specific toast is only reachable by actually calling it)');
    assert(inicioScr.style.transform === '', 'the screen resets cleanly after a completed refresh');
  } catch (err) {
    assert(false, 'pull-to-refresh threw: ' + err.stack);
  }

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
  // signing up, then through the WhatsApp step, should try to resume the
  // originally-requested action. Since the new account isn't verified yet,
  // that resume now lands on the "cuenta en revisión" gate rather than the
  // form — the account exists but can't write until the founder approves.
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
    assert(text('modal-title') === 'Un paso más: WhatsApp', 'signup now shows the WhatsApp explanation step first, before resuming anything');
    window.runWhatsAppStepContinue();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Tu cuenta está en revisión', 'resuming after signup lands on the verification gate — a brand-new account cannot post until its number is verified');
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

    // ── Proactive phone-uniqueness check: signup is blocked BEFORE it
    // ever reaches Supabase if the number is already verified elsewhere,
    // not just left to fail later at admin-approval time. ──
    fakePhoneAlreadyVerified = true;
    doc.getElementById('acct-name').value = 'Numero Duplicado';
    doc.getElementById('acct-email').value = 'duplicado@example.com';
    doc.getElementById('acct-phone').value = '981 000 0000';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Ese número ya está verificado en otra cuenta — usa uno diferente', 'signing up with an already-verified phone number is blocked proactively, with a clear reason');
    assert(!lastUpdate.profiles || lastUpdate.profiles.phone !== '+529810000000', 'the blocked signup never actually reached Supabase with this number');
    fakePhoneAlreadyVerified = false;

    // ── The real production bug: MC.signUp()'s profile-update call had
    // zero error handling, so a transient failure silently looked like
    // success while real name/phone never actually persisted. Now it
    // retries once, and genuinely surfaces the error if it still fails. ──
    forcedErrors.profilesUpdateFailOnce = true;
    doc.getElementById('acct-name').value = 'Reintento Exitoso';
    doc.getElementById('acct-email').value = 'reintento@example.com';
    doc.getElementById('acct-phone').value = '981 555 1212';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Un paso más: WhatsApp', 'a transient failure on the FIRST attempt still results in overall success, thanks to the retry — reaching the WhatsApp step proves signUp() didn\'t error out');
    assert(currentProfile.display_name === 'Reintento Exitoso' && currentProfile.phone === '+529815551212', 'the retry genuinely persisted the real data — this is exactly what was silently failing in production before the fix');
    window.runWhatsAppStepContinue();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === '¡Cuenta creada! Actívala enviando el WhatsApp desde tu número ✓', 'completing the WhatsApp step shows the real post-verification-request confirmation');

    await window.doSignOut();
    await new Promise(r => setTimeout(r, 20));
    await window.openAccount(); // previous signup closed the modal entirely after the WhatsApp step

    forcedErrors.profilesUpdateAlways = true;
    doc.getElementById('acct-name').value = 'Fallo Persistente';
    doc.getElementById('acct-email').value = 'fallopersistente@example.com';
    doc.getElementById('acct-phone').value = '981 555 3434';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') !== 'Un paso más: WhatsApp', 'a failure that persists through the retry never reaches the WhatsApp step at all — this is the actual fix: no more silent false-success');
    assert(text('toast') !== '¡Cuenta creada! Ya tienes sesión iniciada ✓', 'and no false-success toast shows either');
    forcedErrors.profilesUpdateAlways = false;

    await window.doSignOut();
    await new Promise(r => setTimeout(r, 20));

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
    await window.openAccount(); // the previous signup left the modal on the WhatsApp step screen, not the form

    doc.getElementById('acct-name').value = 'Ricardo Martín';
    doc.getElementById('acct-email').value = 'ricardo@example.com';
    doc.getElementById('acct-phone-cc').value = '52';
    doc.getElementById('acct-phone').value = '981 123 4567';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Un paso más: WhatsApp', 'signup shows the WhatsApp explanation step first, not an immediate success toast');
    const signupWaLink = doc.querySelector('#modal-body a[href*="wa.me"]');
    assert(!!signupWaLink, 'a real WhatsApp link is rendered on this screen, not just a description of one');
    assert(signupWaLink.getAttribute('href').includes(encodeURIComponent('+529811234567')), 'the link includes the REAL registered phone number — the actual security signal the founder compares against the incoming sender, not just a UI gesture');
    assert(signupWaLink.getAttribute('href').includes(encodeURIComponent('Ricardo')), 'the link also includes the real name, not a placeholder');
    window.runWhatsAppStepContinue();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === '¡Cuenta creada! Actívala enviando el WhatsApp desde tu número ✓', 'completing the WhatsApp step shows the real post-signup confirmation');
    assert(lastUpdate.profiles && lastUpdate.profiles.phone === '+529811234567', 'Mexico (+52) default combines correctly too');
    assert(refreshSessionCallCount >= 1, 'signup forces a session refresh so the JWT drops the stale is_anonymous:true claim — without this, every new signup would fail on their very first authenticated action afterward (e.g. verifying a business) with a permission error');

    // ── Show/hide password toggle — a real DOM interaction, not just a
    // cosmetic detail: confirm the input type actually changes. ──
    await window.doSignOut();
    await new Promise(r => setTimeout(r, 20));
    await window.openAccount();
    window.setAccountMode('login');
    assert(doc.getElementById('acct-password').type === 'password', 'password field starts masked');
    const toggleBtn = doc.querySelector('#acct-password + button, #acct-password ~ button');
    window.togglePasswordVisibility('acct-password', toggleBtn);
    assert(doc.getElementById('acct-password').type === 'text', 'toggling reveals the real password as plain text, not just a visual change');
    window.togglePasswordVisibility('acct-password', toggleBtn);
    assert(doc.getElementById('acct-password').type === 'password', 'toggling again re-masks it');

    // ── Forgot password: WhatsApp-mediated request step (by phone) ──
    window.openForgotPassword();
    assert(text('modal-title') === 'Recuperar contraseña', 'the forgot-password link opens a dedicated request screen');
    await window.submitForgotPassword(); // no number typed yet
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Escribe tu número', 'submitting with no number is blocked client-side, not sent to Supabase');

    window.openForgotPassword();
    doc.getElementById('forgot-phone-cc').value = '52';
    doc.getElementById('forgot-phone').value = '981 123 4567';
    await window.submitForgotPassword();
    await new Promise(r => setTimeout(r, 40));
    assert(text('modal-title') === 'Un paso más: WhatsApp', 'a real request shows the WhatsApp explanation step, not an immediate toast');
    const resetWaLink = doc.querySelector('#modal-body a[href*="wa.me"]');
    assert(!!resetWaLink && resetWaLink.getAttribute('href').includes(encodeURIComponent('+529811234567')), 'the link includes the real registered phone number');
    assert(fakePasswordResetRequests.some(r => r.claimed_email === 'ricardo@example.com'), 'the request genuinely exists in the (fake) database, keyed by the email the phone resolved to');
    window.runWhatsAppStepContinue();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Solicitud enviada — revisaremos tu mensaje pronto ✓', 'completing the WhatsApp step shows the real confirmation');
    assert(text('modal-title') === 'Iniciar sesión', 'after completing the step, it returns to the login screen');

    // A number with no matching account is stopped before any request.
    window.openForgotPassword();
    doc.getElementById('forgot-phone').value = '999 000 0000';
    await window.submitForgotPassword();
    await new Promise(r => setTimeout(r, 30));
    assert(text('toast') === 'No encontramos una cuenta con ese número.', 'an unknown number is rejected, not sent onward');
    assert(text('modal-title') !== 'Un paso más: WhatsApp', 'and never reaches the WhatsApp step');

    // Forced failure on the request itself (real account) must still surface a real error.
    forcedErrors.requestPasswordReset = { message: 'simulated failure' };
    window.openForgotPassword();
    doc.getElementById('forgot-phone').value = '981 123 4567';
    await window.submitForgotPassword();
    await new Promise(r => setTimeout(r, 30));
    assert(text('modal-title') !== 'Un paso más: WhatsApp', 'a genuinely failed request never reaches the WhatsApp step at all');
    forcedErrors.requestPasswordReset = null;

    // ── Admin side: reviewing the request via the unified Pendiente queue ──
    await window.openPending();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-body').includes('ricardo@example.com'), 'admin sees the real requested email in the unified Pendiente list');
    const beforeApproveCount = moderationQueueCountFromTitle(text('modal-title'));

    const theRequest = fakePasswordResetRequests.find(r => r.claimed_email === 'ricardo@example.com');
    window.openPasswordResetDetail(theRequest.id);
    assert(text('modal-title') === 'Restablecer contraseña', 'tapping the password-reset item in the list opens its own detail screen');
    assert(text('modal-body').includes('Ricardo Martín') && text('modal-body').includes('+529811234567'), 'admin sees the matched account\'s real name and on-file phone — the actual thing they compare against the incoming WhatsApp number');

    await window.approvePasswordResetRequest(theRequest.id);
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast').includes('Aprobado — código:'), 'approving shows the real generated code so the admin can relay it manually');
    assert(moderationQueueCountFromTitle(text('modal-title')) === beforeApproveCount - 1, 'approved request is removed from the unified pending list, back on the list view');
    assert(theRequest.status === 'approved' && /^\d{6}$/.test(theRequest.reset_code), 'the request now genuinely holds a real 6-digit code, not a placeholder');

    // ── Completing the reset with that real code ──
    window.openCompletePasswordReset();
    assert(text('modal-title') === 'Ingresa tu código', 'the "I have a code" screen is reachable from the login flow');
    doc.getElementById('reset-complete-phone-cc').value = '52';
    doc.getElementById('reset-complete-phone').value = '981 123 4567';
    doc.getElementById('reset-complete-code').value = '000000'; // deliberately wrong
    doc.getElementById('reset-complete-password').value = 'nuevaClaveSegura1';
    await window.submitCompletePasswordReset();
    await new Promise(r => setTimeout(r, 30));
    assert(text('toast') === 'Código inválido o vencido — pide uno nuevo por WhatsApp', 'a wrong code is rejected with a generic message, not revealing why');

    doc.getElementById('reset-complete-code').value = theRequest.reset_code; // the real one
    await window.submitCompletePasswordReset();
    await new Promise(r => setTimeout(r, 30));
    assert(text('toast') === '¡Contraseña actualizada! Ya puedes iniciar sesión ✓', 'the REAL code genuinely completes the reset');
    assert(theRequest.status === 'completed', 'the request is marked completed, so this same code can never be reused');

    // ── The recovery-link return: Supabase fires a real auth event when
    // the link redirect lands back on the app — confirmed by actually
    // invoking the captured callback, the same one supabase-js would call. ──
    assert(typeof authStateChangeCallback === 'function', 'the app registered a real onAuthStateChange listener on load, not just planned to');
    authStateChangeCallback('PASSWORD_RECOVERY', currentSession);
    assert(text('modal-title') === 'Crea una nueva contraseña', 'a real PASSWORD_RECOVERY event opens the set-new-password screen automatically');

    doc.getElementById('new-password-input').value = '123'; // too short
    await window.submitNewPassword();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'La contraseña debe tener al menos 6 caracteres', 'a too-short new password is blocked, not sent to Supabase');

    doc.getElementById('new-password-input').value = 'nuevaClave123';
    await window.submitNewPassword();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === '¡Contraseña actualizada! ✓', 'a real valid new password succeeds with the right confirmation');

    // Restore the signed-in-as-Ricardo state the rest of this test block
    // expects — this section signed out on purpose to reach the login
    // form; restoring directly (same uid) rather than via signIn, which
    // would introduce a different fake session id and risk confusing
    // later assertions that assume continuity with the same account.
    currentSession = { user: { id: 'uid-1', is_anonymous: false, email: 'ricardo@example.com' } };

    await window.openAccount();
    assert(text('modal-body').includes('ricardo@example.com'), 'openAccount() after signup shows the signed-in view with the real email');
    assert(text('modal-body').includes('+529811234567'), 'signed-in view shows the phone in international (+52…) format');
    assert(text('modal-body').includes('Cerrar sesión'), 'signed-in view offers sign-out');
    assert(text('modal-body').includes('en revisión'), 'account view shows the phone as pending verification by default, not silently trusted');

    // ── Editing my own account ──
    window.openEditAccount();
    assert(text('modal-title') === 'Editar mi cuenta', 'the edit-account screen opens from the account view');
    assert(doc.getElementById('edit-acct-name').value === 'Ricardo Martín', 'edit form is pre-filled with the real current name (from the actual signup, now that profile updates genuinely persist)');
    assert(doc.getElementById('edit-acct-phone').value === '+529811234567', 'edit form is pre-filled with the real current phone');
    doc.getElementById('edit-acct-name').value = 'Ricardo Editado';
    doc.getElementById('edit-acct-phone').value = '+529810009999';
    await window.submitEditAccount();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Cambios guardados ✓', 'a real account edit succeeds with the right confirmation');
    assert(lastUpdate.profiles && lastUpdate.profiles.phone === '+529810009999' && lastUpdate.profiles.display_name === 'Ricardo Editado', 'the real edited name and phone were sent to Supabase (the actual DB trigger — tested separately at the database level — is what resets verification to pending on a phone change)');

    // ── Admin: reviewing phone verification requests via unified Pendiente ──
    currentProfile.phone_verification_status = 'pending'; // simulate the reset the real DB trigger performs
    await window.openPending();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-body').includes('Ricardo Editado'), 'admin sees the real (edited) name in the unified pending list');
    assert(text('modal-body').includes('+529810009999'), 'admin sees the real current phone to compare against the incoming WhatsApp sender');
    assert(text('modal-body').includes('Sí, aprobar'), 'phone-verification rows carry an inline approve button — fast path for the one queue item that blocks a real person');

    window.openPhoneVerificationDetail('uid-1');
    assert(text('modal-title') === 'Verificación de teléfono', 'tapping the phone item in the list opens its own detail screen');

    await window.approvePhoneVerification('uid-1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Teléfono verificado ✓', 'approving shows the right confirmation');
    assert(currentProfile.phone_verification_status === 'verified', 'the real status was actually updated, not just the UI');
    assert(!text('modal-body').includes('Ricardo Editado'), 'the approved phone-verification request is removed from the unified pending list (other unrelated pending content remains, since this fake\'s content tables don\'t filter by status)');

    await window.openAccount();
    assert(text('modal-body').includes('✓ verificado'), 'account view now shows the real verified badge');

    // Reset to test the reject path too.
    currentProfile.phone_verification_status = 'pending';
    await window.openPending();
    window.openPhoneVerificationDetail('uid-1');
    await window.rejectPhoneVerification('uid-1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Rechazado', 'rejecting shows the right confirmation');
    assert(currentProfile.phone_verification_status === 'rejected' && currentProfile.phone_verification_reason, 'a real rejection reason was actually saved, not just a status flip');

    await window.openAccount();
    assert(text('modal-body').includes(currentProfile.phone_verification_reason), 'the account view shows the real rejection reason back to the account owner');

    // ── Unverified accounts can browse but not write. This is the client
    //    half of the is_verified_writer gate; the DB half is enforced by
    //    RLS and verified directly against Supabase, not here. ──
    await window.openPost('avisos');
    assert(text('modal-title') === 'No pudimos verificar tu número', 'a rejected account hits the verification gate, not the post form');
    currentProfile.phone_verification_status = 'pending'; currentProfile.phone_verification_reason = null;
    await window.openPost('clasificado');
    assert(text('modal-title') === 'Tu cuenta está en revisión', 'a pending account hits the "en revisión" gate instead of the post form');
    assert(text('modal-body').includes('mismo número'), 'the gate explains the WhatsApp must come from the registered number');
    const ofBeforeGate = text('of-list');
    await window.toggleClaim('o1');
    await new Promise(r => setTimeout(r, 10));
    assert(text('modal-title') === 'Tu cuenta está en revisión', 'a pending account also cannot claim an Oferta');
    assert(text('of-list') === ofBeforeGate, 'the blocked claim never optimistically changed the rendered state');

    currentProfile.phone_verification_status = 'verified'; currentProfile.phone_verification_reason = null; // leave in a clean state for later tests
    currentProfile.display_name = 'Ricardo Martín'; currentProfile.phone = '+529811234567'; // undo the edit-account test's change so downstream assertions (Perdidos/Avisos auto-fill) see the expected original value

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
    assert(!!doc.getElementById('pf-desc') && !!doc.getElementById('pf-photo-wrap'), 'the form includes the newly-added description and image fields');

    // Missing description must block submission — collecting it was the
    // whole point of this change, not just adding an optional field.
    doc.getElementById('pf-name').value = 'Sin Descripcion';
    doc.getElementById('pf-address').value = 'Calle 1';
    doc.getElementById('pf-phone').value = '981 000 0000';
    doc.getElementById('pf-cat').value = 'Comida';
    await window.submitPost('negocio_verificar');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Completa nombre, descripción, dirección, teléfono y categoría', 'submitting without a description is blocked, not silently accepted');
    assert(!lastInsert.businesses || lastInsert.businesses.business_name !== 'Sin Descripcion', 'the blocked submission never actually reached Supabase');

    doc.getElementById('pf-name').value = 'Taco Loco';
    doc.getElementById('pf-desc').value = 'Tacos al pastor y de canasta, para llevar';
    doc.getElementById('pf-address').value = 'Calle 10 #123';
    doc.getElementById('pf-phone').value = '981 555 0000';
    doc.getElementById('pf-cat').value = 'Comida';
    doc.getElementById('pf-hours').value = 'Lun-Sáb 9am-8pm';
    doc.getElementById('pf-social').value = 'instagram.com/tacolocotest';
    await window.submitPost('negocio_verificar');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Tu negocio fue enviado para revisión ✓', 'verification submission shows a "sent for review" toast, not instant approval');
    assert(lastInsert.businesses && lastInsert.businesses.business_name === 'Taco Loco' && lastInsert.businesses.description === 'Tacos al pastor y de canasta, para llevar', 'the real business data — including the now-required description — was sent to Supabase');
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
    assert(!text('modal-body').includes('Actualizar a Premium'), 'Premium upsell correctly stays hidden for admin accounts — admin already has premium (and more) rights, so there\'s nothing to upgrade to');

    // Prove it's genuinely the admin check gating this, not some other
    // coincidental condition — same business, same approved status, only
    // is_admin changes.
    currentProfile.is_admin = false;
    await window.openAccount();
    assert(text('modal-body').includes('Actualizar a Premium'), 'a non-admin with the exact same approved, non-premium business DOES see the upsell — confirming is_admin is what specifically gates it');
    currentProfile.is_admin = true; // restore — later tests (Moderación/Pendiente access) need this fixture to stay admin

    // ── Editing an existing (approved) business ──
    await window.openBusinessEdit();
    assert(text('modal-title') === 'Editar mi negocio', 'editing opens a distinctly-titled form, not the first-time verification screen');
    assert(doc.getElementById('pf-name').value === 'Taco Loco', 'the edit form is pre-filled with the real current business name');
    assert(doc.getElementById('pf-desc').value === 'Tacos al pastor y de canasta, para llevar', 'the edit form is pre-filled with the real current description');
    assert(doc.getElementById('pf-hours').value === 'Lun-Sáb 9am-8pm', 'the edit form is pre-filled with real current hours');

    doc.getElementById('pf-phone').value = '981 000 1234';
    delete lastInsert.businesses; // so the next assertion can tell insert vs update apart cleanly
    await window.submitPost('negocio_verificar');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Cambios guardados — tu negocio vuelve a revisión ✓', 'editing shows a distinct "back to review" toast, not the first-time verification message');
    assert(lastUpdate.businesses && lastUpdate.businesses.phone === '981 000 1234', 'the real edited field was sent as an UPDATE');
    assert(!lastInsert.businesses, 'editing an existing business never creates a second (duplicate) business row via insert');

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

    // ── Tienda transaction + contact fields: delivery/collection, the
    //    exact-typed price, item condition, and the per-listing contact
    //    methods that drive the WhatsApp/call/SMS handoff on the card. ──
    {
      // A business that doesn't deliver can't offer "entrega" on a product.
      currentBusiness.delivers = false;
      await window.openPost('producto');
      assert(doc.querySelector('#pf-fulfillment .seg-btn[data-v="entrega"]').classList.contains('seg-btn-off'),
        'a non-delivering business has the "entrega" fulfillment option disabled in the producto form');

      currentBusiness.delivers = true;
      await window.openPost('producto');
      assert(!!doc.getElementById('pf-item_condition') && !!doc.getElementById('pf-availability') && !!doc.getElementById('pf-fulfillment'),
        'the producto form now carries estado / disponibilidad / entrega controls');
      assert(doc.querySelectorAll('#pf-contact_methods .mchip.on').length === 3,
        'all three contact methods are pre-selected by default');

      doc.getElementById('pf-name').value = 'Pan artesanal';
      doc.getElementById('pf-price').value = '$45 la pieza';
      window.segPick(doc.querySelector('#pf-item_condition .seg-btn[data-v="usado"]'));
      window.segPick(doc.querySelector('#pf-availability .seg-btn[data-v="pedido"]'));
      doc.getElementById('pf-lead_time').value = '2 días';
      window.segPick(doc.querySelector('#pf-fulfillment .seg-btn[data-v="ambos"]'));
      window.multiPick(doc.querySelector('#pf-contact_methods .mchip[data-v="sms"]')); // drop SMS, keep WhatsApp + Llamada
      delete lastInsert.productos;
      await window.submitPost('producto');
      await new Promise(r => setTimeout(r, 20));
      const p = lastInsert.productos;
      assert(!!p, 'the producto submission reached Supabase');
      assert(p.price_text === '$45 la pieza' && p.price_mxn === 45,
        'the exact typed price is kept in price_text while price_mxn still holds the parsed number');
      assert(p.item_condition === 'usado' && p.availability === 'pedido' && p.lead_time === '2 días' && p.fulfillment === 'ambos',
        'the chosen transaction fields are all sent');
      assert(Array.isArray(p.contact_methods) && p.contact_methods.includes('whatsapp') && p.contact_methods.includes('llamada') && !p.contact_methods.includes('sms'),
        'only the still-selected contact methods are sent');
      assert(p.seller_phone === currentBusiness.phone,
        'the business phone is snapshotted onto the product row so the public card can build the wa.me link without reading the private businesses table');

      // A listing nobody can respond to is blocked.
      await window.openPost('producto');
      doc.getElementById('pf-name').value = 'Sin contacto';
      doc.querySelectorAll('#pf-contact_methods .mchip.on').forEach(c => window.multiPick(c));
      delete lastInsert.productos;
      await window.submitPost('producto');
      await new Promise(r => setTimeout(r, 20));
      assert(text('toast') === 'Elige al menos una forma de contacto', 'a producto with no contact method selected is blocked client-side');
      assert(!lastInsert.productos, 'the blocked producto never reached Supabase');

      // Clasificado: contact number pre-fills from the account, is
      // required, and the new fields ride along on submit.
      await window.openPost('clasificado');
      assert(doc.getElementById('pf-contact_phone').value === currentProfile.phone,
        'the clasificado contact number pre-fills from the signed-in account');
      doc.getElementById('pf-name').value = 'Bici de montaña';
      doc.getElementById('pf-contact_phone').value = '';
      delete lastInsert.clasificados;
      await window.submitPost('clasificado');
      await new Promise(r => setTimeout(r, 20));
      assert(text('toast') === 'Escribe tu número de contacto', 'a clasificado with the contact number cleared is blocked');
      assert(!lastInsert.clasificados, 'the blocked clasificado never reached Supabase');

      doc.getElementById('pf-contact_phone').value = '981 222 3333';
      doc.getElementById('pf-zone').value = 'San Román';
      window.segPick(doc.querySelector('#pf-fulfillment .seg-btn[data-v="recoger"]'));
      window.segPick(doc.querySelector('#pf-item_condition .seg-btn[data-v="usado"]'));
      await window.submitPost('clasificado');
      await new Promise(r => setTimeout(r, 20));
      const c = lastInsert.clasificados;
      assert(!!c && c.contact_phone === '981 222 3333' && c.zone === 'San Román' && c.fulfillment === 'recoger' && c.item_condition === 'usado',
        'the clasificado transaction + contact fields are all sent');
      assert(text('toast') === 'Enviado — en revisión antes de publicarse ✓', 'a complete clasificado submits successfully');
    }

    // Business profile carries the payment/delivery settings on submit.
    {
      await window.openBusinessEdit();
      window.multiPick(doc.querySelector('#pf-payment_methods .mchip[data-v="efectivo"]'));
      window.multiPick(doc.querySelector('#pf-payment_methods .mchip[data-v="transferencia"]'));
      window.segPick(doc.querySelector('#pf-delivers .seg-btn[data-v="si"]'));
      assert(doc.getElementById('row-delivery_info').style.display !== 'none',
        'choosing "Sí" for delivery reveals the zones/cost row');
      doc.getElementById('pf-delivery_info').value = 'Centro · $30';
      delete lastUpdate.businesses;
      await window.submitPost('negocio_verificar');
      await new Promise(r => setTimeout(r, 20));
      const b = lastUpdate.businesses;
      assert(!!b && Array.isArray(b.payment_methods) && b.payment_methods.includes('efectivo') && b.payment_methods.includes('transferencia'),
        'the selected payment methods are sent as an array');
      assert(b.delivers === true && b.delivery_info === 'Centro · $30',
        'the delivery toggle and free-text zones/cost are sent');
    }

    // The Tienda card now opens a real detail view (not the old stub) with
    // direct-contact links built from the seller's number — driven through
    // the real fetch → map → render pipeline, using the fixture rows.
    {
      window.openProdView('negocio', 'p1');
      assert(text('modal-title') === 'Producto test', 'tapping a product opens its detail view, not a "próximamente" toast');
      const links = [...doc.querySelectorAll('#modal-body a')];
      const waLink = links.find(a => a.href.includes('wa.me'));
      assert(!!waLink && waLink.href.includes('529811002000') && waLink.href.includes(encodeURIComponent('Producto test')),
        'the detail view has a WhatsApp link to the snapshotted seller number with a pre-filled message');
      assert(links.some(a => a.href.startsWith('tel:+52')), 'a call link is present since "llamada" was one of the seller\'s methods');
      assert(!links.some(a => a.href.startsWith('sms:')), 'no SMS link, because the seller did not select "mensaje de texto"');

      window.openProdView('personal', 'c1');
      const links2 = [...doc.querySelectorAll('#modal-body a')];
      assert(links2.length === 1 && links2[0].href.includes('wa.me') && links2[0].href.includes('529813004000'),
        'a clasificado that only chose WhatsApp shows exactly one contact button, to its own per-post number');
      assert(text('modal-body').includes('Centro'), 'the clasificado detail view shows its zone');
    }

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

    // ── Admin unified Pendiente queue (this fixture account is_admin: true) ──
    await window.openAccount();
    assert(text('modal-body').includes('Pendiente'), 'signed-in admin sees the unified Pendiente entry point (a non-admin would not)');

    await window.openPending();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Pendiente (10)', 'queue aggregates one pending item from each of the 9 content tables plus business verification requests (phone/password requests from earlier tests are already resolved by this point, so the count matches the content-only total)');

    // The whole point of this change: a business verification request
    // should show enough to actually review, not just a name.
    window.openModerationDetail('businesses', currentBusiness.id);
    assert(text('modal-body').includes('Tacos al pastor'), 'business detail view shows the real description, not just the business name');
    assert(text('modal-body').includes('Lun-Sáb 9am-8pm'), 'business detail view shows hours');
    assert(text('modal-body').includes('instagram.com/tacolocotest'), 'business detail view shows the social/website link');
    window.renderPendingQueue();
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
    assert(text('modal-title') === 'Pendiente (9)', 'rejected item is removed from the queue and the count updates');

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
    await new Promise(r => setTimeout(r, 20)); // rejected-submissions list loads after the view paints, then re-renders
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
