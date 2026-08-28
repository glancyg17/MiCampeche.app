// Functional smoke test — NOT a mock rehearsal. Loads the real index.html,
// the real js/supabase-client.js, the real js/app.js, and runs the real
// init(). Only the network boundary (the supabase-js client itself) is
// stubbed, with a faithful chainable/thenable fake, so every line of our
// own code — data mapping, render functions, submit handlers, error
// paths — executes for real.
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

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
      if (prop === 'single') { single = true; return () => proxy; }
      return (..._args) => proxy; // select/eq/order/limit/gte/in/etc all just chain
    }
  });
  return proxy;
}

const SAMPLE = {
  profiles: [{ id: 'uid-1', tier: 'personal', display_name: 'Vecino Test', phone: '9811234567', is_admin: false }],
  noticias: [{ id: 'n1', headline: 'Titular de prueba', summary: 'Resumen', thumbnail_url: '', source_name: 'Reportero X', source_url: 'https://example.com', published_at: NOW.toISOString(), status: 'published' }],
  eventos: [{ id: 'e1', title: 'Evento de prueba', category: 'Cultura', event_date: ds(1), event_time: '7:00 PM', location: 'Centro', status: 'published' }],
  productos: [{ id: 'p1', business_name: 'Negocio Test', title: 'Producto test', category: 'Comida', price_mxn: 150, image_url: '', featured: true, status: 'published' }],
  clasificados: [{ id: 'c1', title: 'Artículo test', category: 'Hogar', price_mxn: 300, image_url: '', status: 'published', profiles: { display_name: 'Ricardo T.' } }],
  ofertas: [{ id: 'o1', business_name: 'Negocio Oferta', title: 'Oferta test', price_was: 200, price_now: 100, quantity_total: 5, is_premium: false, image_url: '', status: 'published', created_at: NOW.toISOString(), ofertas_bookings: [{ booked_date: ds(0) }] }],
  ofertas_redemptions: [],
  ofertas_bookings: [{ booked_date: ds(1) }, { booked_date: ds(2) }],
  perdidos: [{ id: 'pf1', report_type: 'perdido', title: 'Gato test', description: 'desc', location: 'Zona test', image_url: '' }],
  alertas: [{ id: 'al1', alert_type: 'Corte de agua', zone: 'Zona test', description: 'desc', resolved: false, created_at: NOW.toISOString() }],
  empleos: [{ id: 'j1', title: 'Puesto test', company: 'Empresa test', pay: '$300/día', tags: ['Tiempo completo'] }],
  reportes: [{ id: 'r1', category: 'Bache', title: 'Bache test', location_text: 'Calle test', description: 'desc', resolved: false, created_at: NOW.toISOString() }],
  reportes_confirmations: [],
  avisos: [{ id: 'av1', category: 'Comunidad', title: 'Aviso test', description: 'desc', contact_info: '981 000 0000', created_at: NOW.toISOString(), profiles: { display_name: 'Vecina Test' } }],
};

// Mutable from outside the eval'd scope (unlike `MC`/`sb`, which are
// let/const bindings private to that eval call and unreachable as
// window.MC — this object reference, by contrast, IS shared, since the
// eval'd code's `sb` variable points at this exact same object) —
// lets the error-path tests below force a real Postgres-shaped error
// through the REAL MC.submitAviso/claimOferta code, rather than
// monkey-patching those functions out of the test.
const forcedErrors = { insert: {}, delete: {} };

let currentSession = { user: { id: 'uid-1', is_anonymous: true, email: null } };
Object.assign(forcedErrors, { updateUser: null, signIn: null });

const lastInsert = {};

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
    signInWithPassword: async ({ email, password }) => {
      if (forcedErrors.signIn) return { data: null, error: forcedErrors.signIn };
      currentSession = { user: { id: 'uid-2', is_anonymous: false, email } };
      return { data: { user: currentSession.user }, error: null };
    },
    signOut: async () => { currentSession = null; return { error: null }; },
  },
  from(table) {
    return {
      select: (..._a) => makeChain(() => ({ data: SAMPLE[table] || [], error: null })),
      insert: (row) => { lastInsert[table] = row; return makeChain(() => forcedErrors.insert[table]
        ? { data: null, error: forcedErrors.insert[table] }
        : { data: [{ ...row, id: 'new-' + Math.random().toString(36).slice(2) }], error: null }); },
      delete: () => makeChain(() => forcedErrors.delete[table]
        ? { data: null, error: forcedErrors.delete[table] }
        : { data: [], error: null }),
      update: (row) => makeChain(() => ({ data: [row], error: null })),
    };
  },
  rpc: async (_name, args) => ({ data: (args.p_oferta_ids || []).map(id => ({ oferta_id: id, claimed: 2 })), error: null }),
};

(async () => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://micampeche.app/' });
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

  // Exercise the actual submit path (real MC.submitAviso → fake insert → real toast handling)
  try {
    window.openPost('avisos');
    doc.getElementById('pf-title').value = 'Prueba de envío';
    doc.getElementById('pf-desc').value = 'Contenido de prueba';
    doc.getElementById('pf-contact').value = '981 111 2222';
    await window.submitPost('avisos');
    await new Promise(r => setTimeout(r, 50));
    assert(text('toast') === 'Enviado — en revisión antes de publicarse ✓', 'submitPost(avisos) → real MC.submitAviso → success toast');
  } catch (err) {
    assert(false, 'submitPost(avisos) threw: ' + err.stack);
  }

  // Exercise the claim/unclaim toggle path against the real toggleClaim()
  try {
    const beforeHtml = text('of-list');
    await window.toggleClaim('o1');
    await new Promise(r => setTimeout(r, 50));
    assert(text('of-list') !== beforeHtml, 'toggleClaim() actually changed rendered state (optimistic update path ran)');
  } catch (err) {
    assert(false, 'toggleClaim threw: ' + err.stack);
  }

  // ── Error paths: the newest, most bespoke logic (friendly toasts +
  // optimistic-UI rollback), so worth testing deliberately rather than
  // just trusting it reads right. ──
  try {
    forcedErrors.insert.avisos = { code: '23505', message: 'duplicate key value violates unique constraint "one_aviso_per_person_per_day"' };
    window.openPost('avisos');
    doc.getElementById('pf-title').value = 'Segundo aviso';
    await window.submitPost('avisos');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Ya publicaste un aviso hoy — puedes publicar otro mañana.', 'duplicate-submission error (through the REAL MC.submitAviso) maps to the correct friendly Spanish toast, not a generic one');
  } catch (err) {
    assert(false, 'error-path submitPost threw instead of handling the error: ' + err.stack);
  } finally {
    forcedErrors.insert.avisos = null;
  }

  try {
    forcedErrors.insert.ofertas_redemptions = { code: '23505', message: 'duplicate key value violates unique constraint "one_claim_per_person_per_oferta"' };
    forcedErrors.delete.ofertas_redemptions = { code: '23505', message: 'duplicate key value violates unique constraint "one_claim_per_person_per_oferta"' };
    const before = text('of-list');
    await window.toggleClaim('o1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('of-list') === before, 'toggleClaim() (through the REAL MC.claimOferta/unclaimOferta) rolled back the optimistic UI update after a failed write, instead of leaving it stuck');
    assert(text('toast') === 'Ya habías reclamado esta oferta.', 'claim-toggle failure surfaced the correct friendly toast');
  } catch (err) {
    assert(false, 'error-path toggleClaim threw instead of handling the error: ' + err.stack);
  } finally {
    forcedErrors.insert.ofertas_redemptions = null;
    forcedErrors.delete.ofertas_redemptions = null;
  }

  // ── Account flow: signup, signed-in view, sign-out — all through the
  // real openAccount/submitAuth/doSignOut, never touching MC directly. ──
  try {
    await window.openAccount();
    assert(text('modal-title') === 'Crear cuenta', 'openAccount() while anonymous shows the signup form, not a signed-in view');
    assert(!!doc.getElementById('acct-phone'), 'signup form includes the (now required) phone field');

    // Phone validation: too short / missing should block signup entirely.
    doc.getElementById('acct-name').value = 'Sin Telefono';
    doc.getElementById('acct-email').value = 'sintelefono@example.com';
    doc.getElementById('acct-phone').value = '981';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Ingresa un número de teléfono válido (10 dígitos)', 'signup with too-short phone is blocked with the right message, not silently accepted');
    assert(text('modal-title') === 'Crear cuenta', 'blocked signup leaves the form open rather than closing the modal');

    doc.getElementById('acct-name').value = 'Ricardo Martín';
    doc.getElementById('acct-email').value = 'ricardo@example.com';
    doc.getElementById('acct-phone').value = '981 123 4567';
    doc.getElementById('acct-password').value = 'secreto123';
    await window.submitAuth();
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === '¡Cuenta creada! Ya tienes sesión iniciada ✓', 'submitAuth() in signup mode → real MC.signUp → success toast');

    await window.openAccount();
    assert(text('modal-body').includes('ricardo@example.com'), 'openAccount() after signup shows the signed-in view with the real email');
    assert(text('modal-body').includes('9811234567'), 'signed-in view shows the phone saved during signup');
    assert(text('modal-body').includes('Cerrar sesión'), 'signed-in view offers sign-out');

    // Perdidos has no manual contact field — while signed in, the submitted
    // row should carry the account's phone automatically.
    await window.openPost('perdidos');
    doc.getElementById('pf-name').value = 'Gato perdido de prueba';
    await window.submitPost('perdidos');
    await new Promise(r => setTimeout(r, 20));
    assert(lastInsert.perdidos && lastInsert.perdidos.contact_info === '9811234567', 'Perdidos submission auto-fills contact_info from the signed-in account\'s phone, with no form field for it');

    // Avisos DOES have a manual contact field, but it should arrive
    // pre-filled with the account's phone once signed in.
    await window.openPost('avisos');
    assert(doc.getElementById('pf-contact').value === '9811234567', 'Avisos contact field is pre-filled from the account\'s phone for a signed-in user');

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
