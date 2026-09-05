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
function makeChain(getResult, onEq) {
  let single = false;
  const eqs = [];   // captured .eq(field, value) constraints
  const notNulls = []; // fields required non-null via .not(field, 'is', null)
  const proxy = new Proxy({}, {
    get(target, prop) {
      if (prop === 'then') {
        return (res, rej) => {
          let out = getResult();
          // The fake ignores MOST filters on purpose (e.g. a bare
          // .eq('status',…) with no owner scoping — several tests rely on
          // getting every SAMPLE row back, e.g. fetchPendingQueue's real
          // status='pending' filter is deliberately NOT honored here so
          // published/rejected fixture rows still surface in those
          // "queue aggregates..." tests). It DOES honor owner-scoping
          // (.eq('submitted_by',…)) and .not(reason,is null) so the
          // resident-facing "my own posts / my rejections" queries can be
          // exercised for real — and, ONLY when an owner filter is also
          // present in the same chain (i.e. MC.fetchMyRejections, the one
          // real query that combines both), a chained .eq('status',…) too,
          // so a null-reason rejection is distinguishable from that same
          // user's non-rejected rows.
          if (Array.isArray(out.data)) {
            let rows = out.data;
            const hasOwnerFilter = eqs.some(([f]) => f === 'submitted_by');
            eqs.forEach(([f, v]) => {
              if (f === 'submitted_by') rows = rows.filter(r => r && r[f] === v);
              if (f === 'status' && hasOwnerFilter) rows = rows.filter(r => r && r[f] === v);
            });
            notNulls.forEach(f => { rows = rows.filter(r => r && r[f] != null); });
            if (rows !== out.data) out = { ...out, data: rows };
          }
          if (single) out = { ...out, data: Array.isArray(out.data) ? (out.data[0] || null) : out.data };
          return Promise.resolve(out).then(res, rej);
        };
      }
      if (prop === 'catch') return (fn) => Promise.resolve(getResult()).catch(fn);
      if (prop === 'single' || prop === 'maybeSingle') { single = true; return () => proxy; }
      if (prop === 'eq') return (f, v) => { eqs.push([f, v]); if (onEq) onEq(f, v); return proxy; };
      if (prop === 'not') return (f, op, v) => { if (op === 'is' && v === null) notNulls.push(f); return proxy; };
      return (..._args) => proxy; // select/order/limit/gte/in/etc all just chain
    }
  });
  return proxy;
}

const SAMPLE = {
  // profiles moved to a stateful currentProfile object below — see the
  // special-cased 'profiles' handling in from(), needed for real
  // approve/reject/edit-account testing.
  noticias: [{ id: 'n1', headline: 'Titular de prueba', summary: 'Resumen', thumbnail_url: '', source_name: 'Reportero X', source_url: 'https://example.com', source_excerpt: 'Nota de prueba, no se publica.', published_at: NOW.toISOString(), status: 'published' }],
  eventos: [
    { id: 'e1', title: 'Evento de prueba', category: 'Cultura', event_date: ds(1), event_time: '7:00 PM', location: 'Centro', description: 'Descripción larga del evento de prueba\nBoletos: https://example.com/boletos', image_url: 'https://example.com/cartel.jpg', website: 'https://example.com/evento', contact_phone: '981 555 1234', price_text: '$150', source: 'user', status: 'published' },
    // Second event, SAME day and near the same time — the moderation
    // duplicate-check should surface and flag it when reviewing e1.
    { id: 'e2', title: 'Evento de prueba (posible copia)', category: 'Cultura', event_date: ds(1), event_time: '8:00 PM', location: 'Centro', source: 'user', status: 'pending' },
    // e3/e4: owned by the test user (uid-1), for Mis publicaciones'
    // Activo/Finalizado split — e3's last day is 8 days in the past (past
    // the isEventoFinished(raw) boundary of "before today"), e4's is in
    // the future. Both already 'published', so status alone can't tell
    // them apart — only the date does.
    { id: 'e3', title: 'Mi evento finalizado', category: 'Cultura', event_date: ds(-8), event_time: '6:00 PM', location: 'Centro', source: 'user', status: 'published', submitted_by: 'uid-1', created_at: NOW.toISOString() },
    { id: 'e4', title: 'Mi evento activo', category: 'Cultura', event_date: ds(5), event_time: '6:00 PM', location: 'Centro', source: 'user', status: 'published', submitted_by: 'uid-1', created_at: NOW.toISOString() },
    // e5: a PUBLIC (not owned by uid-1) finished event, inside the 7-day
    // grace window MC.fetchEventos now widens to — for the Eventos tab's
    // new "Pasados" date filter, as distinct from e3's Mis-publicaciones
    // Finalizado-tab coverage above.
    { id: 'e5', title: 'Evento de la semana pasada', category: 'Cultura', event_date: ds(-3), event_time: '5:00 PM', location: 'Centro', source: 'user', status: 'published' },
    // e6/e7/e8: three PUBLIC events all today (ds(0)), at different times,
    // for the redesigned "Eventos de hoy" section — full chronological
    // list (not a capped random-2 sample) with a featured-today event
    // (e8, deliberately the LATEST by clock time) sorting first anyway.
    // Times deliberately all-PM, single-digit hour ('3'/'7'/'9') so
    // renderEventosHoySection's plain string .localeCompare(time) sort
    // — not real time parsing — still lands in true chronological order
    // (a leading "9:00 AM" vs "3:00 PM" comparison would sort lexically
    // backwards from real time, since '9' > '3' as characters).
    { id: 'e6', title: 'Evento de hoy A', category: 'Música', event_date: ds(0), event_time: '7:00 PM', location: 'Centro', image_url: 'https://example.com/hoy-a.jpg', source: 'user', status: 'published' },
    { id: 'e7', title: 'Evento de hoy B', category: 'Música', event_date: ds(0), event_time: '3:00 PM', location: 'Centro', image_url: 'https://example.com/hoy-b.jpg', source: 'user', status: 'published' },
    { id: 'e8', title: 'Evento de hoy C', category: 'Música', event_date: ds(0), event_time: '9:00 PM', location: 'Centro', image_url: 'https://example.com/hoy-c.jpg', source: 'user', status: 'published' },
  ],
  productos: [{ id: 'p1', business_name_snapshot: 'Negocio Test', title: 'Producto test', category: 'Comida', price_mxn: 150, price_text: null, image_url: '', featured: true, status: 'published', item_condition: 'nuevo', availability: 'ahora', lead_time: null, fulfillment: 'recoger', seller_phone: '981 100 2000', contact_methods: ['whatsapp', 'llamada'] }],
  clasificados: [{ id: 'c1', title: 'Artículo test', category: 'Hogar', price_mxn: 300, price_text: null, image_url: '', status: 'published', profiles: { display_name: 'Ricardo T.' }, item_condition: 'usado', fulfillment: 'ambos', zone: 'Centro', contact_phone: '981 300 4000', contact_methods: ['whatsapp'] }],
  ofertas: [{ id: 'o1', business_name_snapshot: 'Negocio Oferta', title: 'Oferta test', price_was: 200, price_now: 100, quantity_total: 5, is_premium: false, image_url: '', status: 'published', created_at: NOW.toISOString(), ofertas_bookings: [{ booked_date: ds(0) }] }],
  ofertas_redemptions: [],
  ofertas_bookings: [{ booked_date: ds(1) }, { booked_date: ds(2) }],
  perdidos: [
    { id: 'pf1', report_type: 'perdido', title: 'Gato test', description: 'desc', location: 'Zona test', image_url: '', contact_info: '981 555 0000' },
    // owned by the test user (uid-1) — a still-pending one and another user's, for MC.fetchMyPosts
    { id: 'pf2', report_type: 'perdido', title: 'Mi reporte pendiente', description: 'x', location: 'Centro', image_url: '', status: 'pending', submitted_by: 'uid-1', created_at: NOW.toISOString() },
    { id: 'pf9', report_type: 'encontrado', title: 'Reporte de otra persona', description: 'x', location: 'Centro', image_url: '', status: 'published', submitted_by: 'uid-other', created_at: NOW.toISOString() },
    // pf3: the test user's own REJECTED report with rejection_reason left
    // NULL — the admin-"Quitar"-without-a-typed-message case. Exercises
    // MC.fetchMyRejections no longer undercounting a reasonless rejection.
    { id: 'pf3', report_type: 'perdido', title: 'Mi reporte rechazado sin motivo', description: 'x', location: 'Centro', image_url: '', status: 'rejected', rejection_reason: null, submitted_by: 'uid-1', created_at: NOW.toISOString() },
  ],
  // alertas now also carries pipeline-fed pending rows (status='pending',
  // no submitter). title/source are the automated feed's fields; the
  // rejection_reason here exercises the "owner-less tables never surface
  // in a user's rejections" guard in MC.fetchMyRejections. The description
  // is deliberately multi-paragraph (\n\n) to exercise the pre-wrap render.
  // published_at (source post time) is deliberately 3h before created_at
  // (pipeline sync time) so the render can be checked to prefer it.
  // source_url exercises the "ver publicación original" link in the modal.
  alertas: [{ id: 'al1', title: 'Corte de agua programado en Zona Norte', alert_type: 'Corte de agua', zone: 'Zona test', description: 'Primer párrafo del aviso oficial.\n\nSegundo párrafo con el detalle de la zona afectada y la duración estimada.', source: 'JAPAY', source_url: 'https://facebook.com/aguakan/posts/123', published_at: new Date(NOW.getTime() - 3 * 60 * 60 * 1000).toISOString(), resolved: false, status: 'pending', rejection_reason: 'prueba: no debe aparecer en rechazos de nadie', created_at: NOW.toISOString() }],
  empleos: [
    { id: 'j1', title: 'Puesto test', company: 'Empresa test', pay: '$300/día', tags: ['Tiempo completo'], contact_info: '981 555 0001' },
    // j2: carries a real description — MC.fetchEmpleos previously fetched
    // it (submitted on the form) but never returned it, so it was never
    // shown anywhere. Exercises the new openEmpleo() detail view.
    { id: 'j2', title: 'Mesero/a', company: 'Restaurante El Muelle', pay: '$250/día + propinas', tags: ['Medio tiempo'], description: 'Turno de tarde, de 2pm a 10pm. Se requiere experiencia previa en atención al cliente.', status: 'published', contact_info: '981 555 0002' },
  ],
  reportes: [{ id: 'r1', category: 'Bache', title: 'Bache test', location_text: 'Calle test', description: 'desc', resolved: false, created_at: NOW.toISOString() }],
  reportes_confirmations: [],
  avisos: [
    // av1: the test user's own REJECTED aviso — drives the "no aprobadas"
    // count badge and the rejection-reason surfacing in Mis publicaciones.
    { id: 'av1', category: 'Comunidad', title: 'Aviso test', description: 'desc', contact_info: '981 000 0000', status: 'rejected', submitted_by: 'uid-1', created_at: NOW.toISOString(), profiles: { display_name: 'Vecina Test' }, rejection_reason: 'La descripción no es clara' },
    // av2: the same user's PUBLISHED aviso — so Mis publicaciones spans
    // more than one status (and, with pf2, more than one table). Carries
    // an image_url (avisos.image_url is a new column) to exercise the
    // .av-img thumbnail render on the public Avisos card.
    { id: 'av2', category: 'Seguridad', title: 'Mi aviso publicado', description: 'x', image_url: 'https://example.com/aviso-photo.jpg', status: 'published', submitted_by: 'uid-1', created_at: NOW.toISOString(), profiles: { display_name: 'Vecina Test' } },
  ],
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
// Stateful so the reportes auto-resolve trigger (2 distinct votes ->
// reportes.resolved = true) can be exercised through the real app path.
let fakeResolutionVotes = []; // [{ reporte_id, voted_by }]
let refreshSessionCallCount = 0;
let authStateChangeCallback = null;
let fakePasswordResetRequests = [];
let fakeResetIdCounter = 0;
Object.assign(forcedErrors, { updateUser: null, signIn: null });

const lastInsert = {};
const lastUpdate = {};
const lastDelete = {}; // { [table]: id } — id captured from the .eq('id', id) call

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
    if (table === 'reportes_resolution_votes') {
      // Stateful, and it mirrors trg_reporte_auto_resolve: the 2nd distinct
      // vote for a report flips SAMPLE.reportes[...].resolved = true, exactly
      // as the real AFTER INSERT trigger does. Chain filters (.eq/.in) are
      // no-ops here (same as the other fake tables), so fetchReportes does
      // its own client-side grouping over the full list.
      return {
        select: (..._a) => makeChain(() => ({ data: fakeResolutionVotes.map(v => ({ ...v })), error: null })),
        insert: (row) => { lastInsert.reportes_resolution_votes = row; return makeChain(() => {
          if (forcedErrors.insert.reportes_resolution_votes) return { data: null, error: forcedErrors.insert.reportes_resolution_votes };
          if (fakeResolutionVotes.some(v => v.reporte_id === row.reporte_id && v.voted_by === row.voted_by))
            return { data: null, error: { code: '23505', message: 'duplicate key value violates unique constraint "reportes_resolution_votes_reporte_id_voted_by_key"' } };
          fakeResolutionVotes.push({ reporte_id: row.reporte_id, voted_by: row.voted_by });
          if (fakeResolutionVotes.filter(v => v.reporte_id === row.reporte_id).length >= 2) {
            const rep = (SAMPLE.reportes || []).find(r => r.id === row.reporte_id);
            if (rep) rep.resolved = true;
          }
          return { data: [{ ...row, id: 'rv-' + fakeResolutionVotes.length }], error: null };
        }); },
        delete: () => makeChain(() => forcedErrors.delete.reportes_resolution_votes
          ? { data: null, error: forcedErrors.delete.reportes_resolution_votes }
          : { data: [], error: null }),
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
        : { data: [], error: null }, (f, v) => { if (f === 'id') lastDelete[table] = v; }),
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

  // Spy on refreshContent so we can confirm a successful self-edit and a
  // successful moderateItem() both actually re-fetch/re-render the public
  // lists, instead of leaving stale content visible until some unrelated
  // later refresh.
  let refreshContentCallCount = 0;
  const realRefreshContent = window.refreshContent;
  window.refreshContent = (...args) => { refreshContentCallCount++; return realRefreshContent(...args); };

  // ── Inicio dashboard: the stat strip is gone, the welcome hero photo
  //    cycles with the same greeting/time-of-day bucket as the greeting
  //    text, and Oferta del día is now a hero-style card. ──
  assert(doc.getElementById('stat-strip') === null, 'the stat strip element no longer exists in the DOM');
  assert(typeof window.renderStatStrip === 'undefined', 'renderStatStrip is no longer a function');
  const dashBody = text('dash-body') || '';
  assert(dashBody.includes('dc-of-hero-img') && dashBody.includes('dc-of-hero-overlay') && !dashBody.includes('dc-of-img'), 'the Oferta del día card uses the new hero-style classes, not the old 48px-thumbnail ones');
  assert(dashBody.includes('class="dash-card dc-of-hero" onclick="nav(\'tienda\')"'), 'the Oferta del día card still links to Tienda');
  // Computed from the REAL current hour, the same way renderWelcomeHero()
  // itself buckets it — no mocking the Date global, matching how ds()
  // elsewhere in this file already derives fixture dates from real time.
  const heroHour = new Date().getHours();
  const expectedHeroCls = (heroHour >= 3 && heroHour < 12) ? 'wh-am' : (heroHour >= 12 && heroHour < 19 ? 'wh-pm' : 'wh-noche');
  const expectedGreet = (heroHour >= 3 && heroHour < 12) ? 'Buenos días' : (heroHour >= 12 && heroHour < 19 ? 'Buenas tardes' : 'Buenas noches');
  const heroEl = doc.getElementById('welcome-hero');
  const heroClasses = ['wh-am', 'wh-pm', 'wh-noche'].filter(c => heroEl.classList.contains(c));
  assert(heroClasses.length === 1 && heroClasses[0] === expectedHeroCls, 'the welcome hero carries exactly one wh-am/wh-pm/wh-noche class, matching the real current time-of-day bucket');
  assert((heroEl.innerHTML || '').includes(expectedGreet), 'the hero class matches whichever greeting text is actually showing');

  assert(text('news-list') && text('news-list').includes('Titular de prueba'), 'Noticias rendered real fetched data');
  assert(text('news-list').includes('news-desc'), 'a noticia WITH a summary shows its description line');
  assert(text('evt-list') && text('evt-list').includes('Evento de prueba'), 'Eventos rendered real fetched data');
  assert(text('evt-list').includes('example.com/cartel.jpg'), 'Event card shows its image thumbnail');
  assert(text('evt-list').includes("openEvento('e1')"), 'Event card is clickable through to its detail page');

  // ── Event detail page: full description, image, website + phone handoff ──
  window.openEvento('e1');
  const evd = text('evento-detail-body') || '';
  assert(doc.getElementById('scr-evento-detail').classList.contains('on'), 'openEvento navigates to the event detail screen');
  assert(evd.includes('<img class="evt-hero-img" src="https://example.com/cartel.jpg"'), 'event detail shows the poster as a full-width <img> (never cropped), not a fixed-height background');
  assert(evd.includes('Descripción larga del evento de prueba'), 'event detail shows the full description');
  assert(evd.includes('<a href="https://example.com/boletos"'), 'a bare URL in the description (e.g. the ticket link) renders as a real clickable link, not plain cut-off text');
  assert(evd.includes('de noviembre') || /\bde [a-zé]+ de 20\d\d/.test(evd), 'event detail shows a full human date');
  assert(evd.includes('https://example.com/evento'), 'event detail links out to the organizer website');
  assert(evd.includes('wa.me/529815551234') && evd.includes('tel:+529815551234'), 'event detail offers WhatsApp + call handoff to the organizer number');
  assert(evd.includes('Precio') && evd.includes('$150'), 'event detail shows the ticket price');
  // e1 isn't featured (no active eventos_featured_bookings exist yet at
  // this point) so it renders in the compact grouped list, which — per
  // the Step 3 redesign — deliberately doesn't surface price at all
  // (only the big featured .evt-card does, and the detail view already
  // asserted above always does); the compact card still shows name+time+loc.
  assert(text('evt-list').includes('evt-list-item') && text('evt-list').includes('7:00 PM'), 'a non-featured event renders in the compact grouped list with its time');

  // ── "Pasados" date filter: MC.fetchEventos now fetches back to 7 days
  //    ago (matching the daily cleanup-expired-eventos job's own grace
  //    window), and evtInDateRange/evtFinished hide anything finished from
  //    every OTHER bucket, surfacing it only under Pasados. e5 (published,
  //    3 days in the past) exercises this; e3 (Mis publicaciones' own
  //    finished-event fixture, 8 days in the past — still inside the
  //    7-day fetch window) doubles as a second, owner-tagged case. ──
  window.setEvtDateFilter('all');
  assert(!text('evt-list').includes('Evento de la semana pasada'), 'a finished event does not appear under the default "Todas las fechas" filter');
  window.setEvtDateFilter('hoy');
  assert(!text('evt-list').includes('Evento de la semana pasada'), 'a finished event does not appear under "Hoy" either');
  window.setEvtDateFilter('semana');
  assert(!text('evt-list').includes('Evento de la semana pasada'), 'nor under "Esta semana"');
  window.setEvtDateFilter('proximamente');
  assert(!text('evt-list').includes('Evento de la semana pasada'), 'nor under "Próximamente" — every upcoming-facing bucket excludes it');
  window.setEvtDateFilter('pasados');
  assert(text('evt-list').includes('Evento de la semana pasada'), 'the new "Pasados" filter is the one place a finished event shows up');
  assert(!text('evt-list').includes('Evento de prueba<'), 'a genuinely future event (e1) does not appear under "Pasados"');
  // Category filtering still combines correctly with the Pasados date filter.
  window.setEvtFilter('Cultura');
  assert(text('evt-list').includes('Evento de la semana pasada'), 'Pasados + a matching category still shows the finished event');
  window.setEvtFilter('all');
  window.setEvtDateFilter('all');

  window.nav('inicio'); // restore the default screen for the pull-to-refresh test below

  // ── Weather modal shows the date & time it was opened ──
  window.openWeatherLightbox();
  const wxb = text('wx-lb') || '';
  assert(wxb.includes('wx-lb-when'), 'the weather modal renders a date/time line');
  assert(/\d{1,2}:\d{2}\s*(a\.m\.|p\.m\.)/.test(wxb) && /(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/.test(wxb), 'the weather modal shows a real clock time and a month — the moment it was opened');
  window.closeWeatherLightbox();
  assert(text('mkt-grid') && text('mkt-grid').includes('Producto test'), 'Tienda/Mercado rendered real productos row');
  assert(text('clas-grid') && text('clas-grid').includes('Artículo test') && text('clas-grid').includes('Ricardo T.'), 'Clasificados rendered real row with joined profile name');
  assert(text('of-list') && text('of-list').includes('Oferta test') && text('of-list').includes('reclamados'), 'Ofertas rendered with real claim count wired in');
  assert(text('pf-list') && text('pf-list').includes('Gato test'), 'Perdidos rendered real fetched data');
  assert(text('pf-list').includes('tel:+529815550000'), 'a Perdidos report with a contact number shows a call button');
  assert(text('alert-list') && text('alert-list').includes('Corte de agua'), 'Alertas rendered real fetched data');
  assert(text('alert-list').includes('alert-headline') && text('alert-list').includes('Corte de agua programado en Zona Norte'), 'an alerta renders its title as a real headline line');
  assert(text('alert-list').includes('class="alert-zone">Zona test<'), 'the zone still renders, now as a secondary line');
  assert(text('alert-list').includes('alert-preview') && text('alert-list').includes('Primer párrafo del aviso oficial.'), 'the card shows a compact one-line preview of the description');
  assert(!text('alert-list').includes('Segundo párrafo'), 'the card preview stops at the first line — the rest is only in the detail modal');
  assert(text('alert-list').includes("openAlertaDetail('al1')"), 'the whole alerta card is clickable through to its detail modal');
  assert(text('alert-list').includes('Hace 3 horas') && !text('alert-list').includes('Hace un momento'), 'the relative time uses published_at (when the source posted), not created_at (when our pipeline synced)');

  // ── Alerta detail modal: full text + link back to the original post.
  //    Resident-facing (no approve/reject), single-view (back closes it). ──
  window.openAlertaDetail('al1');
  assert(text('modal-title') === 'Corte de agua', 'the alerta detail modal titles with the alert type');
  assert(text('modal-body').includes('Corte de agua programado en Zona Norte'), 'the detail modal shows the full headline');
  assert(text('modal-body').includes('Primer párrafo del aviso oficial.\n\nSegundo párrafo'), 'the detail modal shows the complete multi-paragraph description, breaks intact');
  assert(text('modal-body').includes('facebook.com/aguakan/posts/123') && text('modal-body').includes('Ver publicación original'), 'the detail modal links out to the original source post when source_url is set');
  assert(doc.getElementById('modal-bg').classList.contains('on'), 'the detail modal is actually shown');
  window.mcModalBack();
  assert(!doc.getElementById('modal-bg').classList.contains('on'), 'single-view modal: back / ✕ closes it outright, no nested stack left behind');
  assert(text('job-list') && text('job-list').includes('Puesto test'), 'Empleos rendered real fetched data');
  assert(text('job-list').includes('tel:+529815550001'), 'an Empleos listing with a contact number shows a call button');

  // ── Empleo detail view: the description residents type on submission
  //    was previously captured but never fetched/shown anywhere. j2
  //    carries a real description, company, pay, and tags to exercise it. ──
  assert(text('job-list').includes("openEmpleo('j2')"), 'an Empleos card is clickable through to its detail view');
  window.openEmpleo('j2');
  const jobDetail = text('modal-body') || '';
  assert(doc.getElementById('modal-bg').classList.contains('on'), 'openEmpleo opens the modal');
  assert(text('modal-title') === 'Mesero/a', 'the modal title shows the job title');
  assert(jobDetail.includes('$250/día + propinas'), 'the detail view shows the pay');
  assert(jobDetail.includes('Restaurante El Muelle'), 'the detail view shows the company');
  assert(jobDetail.includes('Medio tiempo'), 'the detail view shows the tags');
  assert(jobDetail.includes('Turno de tarde, de 2pm a 10pm'), 'the detail view shows the real description — previously fetched by nothing and shown nowhere');
  window.closeModal();
  assert(text('rep-list') && text('rep-list').includes('Bache test') && text('rep-list').includes('confirmaron'), 'Reportes rendered with real confirm count wired in');
  assert(text('av-list') && text('av-list').includes('Aviso test') && text('av-list').includes('Vecina Test'), 'Avisos rendered real row with joined author name');
  assert(text('av-list').includes('av-img') && text('av-list').includes("background-image:url('https://example.com/aviso-photo.jpg')"), 'a fetched aviso with an image_url renders the .av-img thumbnail (avisos.image_url is a new column, not previously fetched/rendered at all)');

  // ── Reportes "ya no está": social-proof resolution. An open report shows
  //    a distinct resolve-vote button alongside confirm; once 2 different
  //    residents vote, a DB trigger sets resolved=true and the card swaps
  //    its buttons for the "Resuelto" badge. ──
  assert(text('rep-list').includes('Ya no está') && text('rep-list').includes('rep-resolve-btn'), 'an open report shows a "Ya no está" resolve-vote button next to the confirm button');
  assert(!text('rep-list').includes('rep-resolved-badge'), 'and no Resuelto badge while it is still open');
  {
    const savedVer = currentProfile.phone_verification_status;
    const savedSess = currentSession;
    currentProfile.phone_verification_status = 'verified';
    currentSession = { user: { id: 'uid-1', is_anonymous: false, email: 'ricardo@example.com' } };
    // another resident already voted it resolved
    await fakeClient.from('reportes_resolution_votes').insert({ reporte_id: 'r1', voted_by: 'uid-neighbour' });
    // the current user casts the 2nd vote through the real UI path
    await window.toggleResolveVote('r1');
    await new Promise(r => setTimeout(r, 10));
    assert(lastInsert.reportes_resolution_votes && lastInsert.reportes_resolution_votes.reporte_id === 'r1' && lastInsert.reportes_resolution_votes.voted_by === 'uid-1', 'MC.voteReporteResolved inserts {reporte_id, voted_by} into reportes_resolution_votes');
    assert(text('rep-list').includes('rep-resolved-badge') && text('rep-list').includes('Resuelto'), 'after the 2nd distinct vote the report auto-resolves and the card shows the Resuelto badge');
    assert(!text('rep-list').includes('Ya no está'), 'the resolve-vote and confirm buttons are gone once the report is resolved');
    // teardown so later tests (pull-to-refresh re-fetches everything) see a clean fixture
    (SAMPLE.reportes || []).forEach(r => { r.resolved = false; });
    fakeResolutionVotes = [];
    currentProfile.phone_verification_status = savedVer;
    currentSession = savedSess;
  }

  // ── Onboarding: a pinned "how to use this section" card at the top of
  //    each user-postable list, dismissible per device. ──
  assert(text('evt-list').includes('onboard-card') && text('evt-list').includes('Publica tu propio evento'), 'Eventos list shows the pinned how-to card');
  assert(text('pf-list').includes('¿Perdiste o encontraste algo?'), 'Perdidos shows its pinned how-to card');
  assert(text('job-list').includes('¿Ofreces trabajo? Publícalo aquí'), 'Empleos shows its pinned how-to card');
  assert(text('av-list').includes('Avísale a tu colonia'), 'Avisos shows its pinned how-to card');
  assert(text('rep-list').includes('Reporta un problema de tu calle'), 'Reportes shows its pinned how-to card');
  assert(text('alert-list').includes('Qué son las Alertas'), 'Alertas shows its pinned explainer card');
  assert(text('evt-list').includes("openPost('eventos')"), 'the Eventos card leads into the real publish form');
  window.dismissOnboard('eventos');
  assert(!text('evt-list').includes('onboard-card'), 'dismissing the card removes it right away');
  window.renderEventos();
  assert(!text('evt-list').includes('onboard-card') && text('evt-list').includes('Evento de prueba'), 'and it stays dismissed on later renders, without hiding the real events');
  try { window.localStorage.removeItem('mc_onboard_eventos'); } catch (_) {}

  // ── Hardware back button (Android / installed PWA): each press peels one
  //    UI layer — overlay, then screen — instead of quitting on press one. ──
  try {
    const realInnerWidth = window.innerWidth;
    Object.defineProperty(window, 'innerWidth', { value: 400, configurable: true }); // make isMobile() true
    window.mcBackInit();
    const tick = () => new Promise(r => setTimeout(r, 0));
    const backPress = () => window.dispatchEvent(new window.PopStateEvent('popstate', { state: window.history.state }));

    window.nav('anuncios');          // peer tab
    window.openEvento('e1');         // → evento-detail (a sub-screen)
    await tick();
    assert(doc.getElementById('scr-evento-detail').classList.contains('on'), 'set-up: sitting on the event detail screen');
    assert(!!(window.history.state && window.history.state.mcTrap), 'a synthetic history entry is armed while the user is below Inicio');

    window.openMenu();
    await tick();
    assert(doc.getElementById('menu-bg').classList.contains('on'), 'set-up: menu drawer open over the detail screen');

    backPress();
    assert(!doc.getElementById('menu-bg').classList.contains('on'), 'first back press closes the open menu — not the app');
    assert(doc.getElementById('scr-evento-detail').classList.contains('on'), 'and the screen underneath is left untouched');

    backPress();
    assert(doc.getElementById('scr-anuncios').classList.contains('on'), 'next back press steps the sub-screen back to its parent');

    backPress();
    assert(doc.getElementById('scr-inicio').classList.contains('on'), 'next back press returns a peer tab to Inicio');

    assert(window.mcCloseTopLayer() === false, 'at Inicio with nothing open there is no layer left — the next system back press exits the app');
    Object.defineProperty(window, 'innerWidth', { value: realInnerWidth, configurable: true });
  } catch (err) {
    assert(false, 'hardware back button flow threw: ' + err.stack);
  }

  // ── Pull to refresh: real simulated touch gestures (jsdom dispatches
  // the events fine; the code only reads e.touches[...] as plain
  // properties, so a constructed Event with a manually-attached .touches
  // array exercises the exact same code path a real finger would). ──
  try {
    const screensEl = doc.querySelector('.screens');
    const inicioScr = doc.getElementById('scr-inicio');
    const indicator = doc.getElementById('pull-indicator');

    // clientX fixed at 200 (no horizontal drift) unless a test overrides it —
    // makes these genuinely vertical-only gestures instead of relying on
    // clientX being incidentally undefined.
    function touch(type, clientY, cancelable, clientX = 200) {
      const ev = new window.Event(type, { bubbles: true, cancelable: !!cancelable });
      ev.touches = [{ clientX, clientY }];
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

    // ── Regression: a predominantly-horizontal touch (e.g. dragging a
    // side-scrolling .chiprow) must never engage the pull transform — that
    // was the actual FAB-jump bug (translateY on a live gesture makes any
    // position:fixed descendant fixed relative to THAT element instead of
    // the viewport). This is genuinely testable in jsdom: it's just the
    // dx/dy branch logic, not the visual rendering. ──
    touch('touchstart', 100, false, 200);
    touch('touchmove', 110, true, 260); // dx=60, dy=10 → horizontal dominates → must bail, no transform
    assert(inicioScr.style.transform === '', 'a mostly-horizontal drag never applies the pull transform (this is the actual FAB-jump bug)');
    assert(parseFloat(indicator.style.opacity || '0') === 0, 'and the pull indicator never appears for it either');
    touch('touchmove', 250, true, 260); // same gesture straightens out vertically (dy=150 > dx=60 now)…
    assert(inicioScr.style.transform === '', '…but a gesture already identified as horizontal stays abandoned for its whole duration — it can\'t re-engage pull-mode just by straightening out vertically later');
    touch('touchend', 250);
    await new Promise(r => setTimeout(r, 10));

    // A genuinely vertical swipe right after still works exactly as before.
    touch('touchstart', 100);
    touch('touchmove', 300, true); // dx=0, dy=200 → vertical dominates → normal pull-to-refresh path
    assert(inicioScr.style.transform.includes('translateY'), 'a real vertical swipe still engages the pull transform normally after a prior horizontal gesture');
    touch('touchend', 300);
    await new Promise(r => setTimeout(r, 30));
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
    // contact + anon are opt-in toggles now — a plain aviso attaches neither
    delete lastInsert.avisos;
    await window.submitPost('avisos');
    await new Promise(r => setTimeout(r, 50));
    assert(text('toast') === 'Enviado — en revisión antes de publicarse ✓', 'submitPost(avisos) → real MC.submitAviso → success toast');
    assert(lastInsert.avisos && lastInsert.avisos.contact_phone === null && lastInsert.avisos.contact_methods === null && lastInsert.avisos.anonymous === false, 'with the toggles at their defaults, an aviso is written with no contact fields and not anonymous');

    // Now opt into both: anonymous, and a contact number with chosen channels.
    await window.openPost('avisos');
    doc.getElementById('pf-title').value = 'Vieron a esta persona';
    window.segPick(doc.querySelector('#pf-anon .seg-btn[data-v="si"]'));
    window.segPick(doc.querySelector('#pf-want_contact .seg-btn[data-v="si"]'));
    doc.getElementById('pf-contact_phone').value = '981 111 2222';
    window.multiPick(doc.querySelector('#pf-contact_methods .mchip[data-v="sms"]')); // drop SMS, keep WhatsApp + Llamada
    delete lastInsert.avisos;
    await window.submitPost('avisos');
    await new Promise(r => setTimeout(r, 50));
    assert(lastInsert.avisos && lastInsert.avisos.contact_phone === '981 111 2222' && lastInsert.avisos.anonymous === true, 'opting into "Anónimo" + "Sí, que me contacten" writes the number and the anonymous flag');
    assert(Array.isArray(lastInsert.avisos.contact_methods) && lastInsert.avisos.contact_methods.includes('whatsapp') && lastInsert.avisos.contact_methods.includes('llamada') && !lastInsert.avisos.contact_methods.includes('sms'), 'the aviso carries exactly the contact channels the poster left selected (contact_methods text[])');

    // Saying "sí, que me contacten" but leaving the number blank is blocked.
    await window.openPost('avisos');
    doc.getElementById('pf-title').value = 'Sin número';
    window.segPick(doc.querySelector('#pf-want_contact .seg-btn[data-v="si"]'));
    doc.getElementById('pf-contact_phone').value = '';
    delete lastInsert.avisos;
    await window.submitPost('avisos');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Escribe tu número o elige "No hace falta"' && !lastInsert.avisos, 'choosing "Sí, que me contacten" with an empty number is blocked, nothing written');

    // …and a number with every channel unticked is blocked too.
    await window.openPost('avisos');
    doc.getElementById('pf-title').value = 'Sin canales';
    window.segPick(doc.querySelector('#pf-want_contact .seg-btn[data-v="si"]'));
    doc.getElementById('pf-contact_phone').value = '981 000 1111';
    doc.querySelectorAll('#pf-contact_methods .mchip.on').forEach(c => window.multiPick(c));
    delete lastInsert.avisos;
    await window.submitPost('avisos');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Elige al menos una forma de contacto' && !lastInsert.avisos, 'a contact number with no channels selected is blocked, nothing written');

    // ── Avisos photo upload: avisos.image_url is a new column — same real
    //    upload pipeline already exercised for Producto further below,
    //    just confirming CONTENT_PAYLOAD.avisos actually carries the
    //    uploaded URL through to the insert. ──
    await window.openPost('avisos');
    {
      const avisoCanvas = createCanvas(400, 400);
      const actx = avisoCanvas.getContext('2d');
      actx.fillStyle = 'blue'; actx.fillRect(0, 0, 400, 400);
      const avisoJpeg = avisoCanvas.toBuffer('image/jpeg');
      const avisoFile = new window.File([avisoJpeg], 'aviso.jpg', { type: 'image/jpeg' });
      await window.handlePhotoSelect({ files: [avisoFile] }, 'photo');
      await new Promise(r => setTimeout(r, 100));
    }
    doc.getElementById('pf-title').value = 'Aviso con foto';
    doc.getElementById('pf-desc').value = 'Descripción con foto adjunta';
    delete lastInsert.avisos;
    await window.submitPost('avisos');
    await new Promise(r => setTimeout(r, 50));
    assert(lastInsert.avisos && typeof lastInsert.avisos.image_url === 'string' && lastInsert.avisos.image_url.length > 0, 'MC.updatePost/CONTENT_PAYLOAD.avisos includes image_url once a photo was uploaded');

    // ── Eventos month calendar (new submission): unlike Ofertas' rolling
    //    slot calendar (rejects "Ocupado" days), the eventos date field has
    //    NO availability concept at all — every day, including a day in
    //    the PAST relative to real "now", must be pickable and must reach
    //    CONTENT_PAYLOAD.eventos as event_date. ──
    await window.openPost('eventos');
    assert(!!doc.getElementById('pf-date-cal'), 'the eventos form renders a month-calendar picker, not a native date input');
    window.shiftMonthCal('date', -1); // navigate back a month — guarantees a definitely-PAST day is selectable regardless of today's date
    const prevMonthCells = [...doc.querySelectorAll('#pf-date-cal .mcal-day:not(.empty)')];
    assert(prevMonthCells.length > 0, 'the previous month\'s grid renders real day cells');
    const nowForCal = new Date();
    let pastY = nowForCal.getFullYear(), pastM = nowForCal.getMonth() - 1;
    if (pastM < 0) { pastM = 11; pastY--; }
    const expectedPastDs = `${pastY}-${String(pastM + 1).padStart(2, '0')}-01`;
    // jsdom is loaded with runScripts:'outside-only', which — same as
    // every other inline onclick=".." attribute in this codebase's forms
    // (segPick/multiPick/pickSlotDay are all invoked the same way in the
    // rest of this suite) — doesn't execute inline HTML event-handler
    // attributes; call the real handler the cell's onclick would have
    // called directly instead of doing el.click().
    window.pickMonthCalDay('date', expectedPastDs);
    const clickedSelCell = doc.querySelector('#pf-date-cal .mcal-day.sel');
    assert(!!clickedSelCell && clickedSelCell.textContent.trim() === '1', 'picking a day cell in the rendered calendar marks it selected');
    doc.getElementById('pf-name').value = 'Evento con fecha pasada';
    doc.getElementById('pf-loc').value = 'Centro';
    delete lastInsert.eventos;
    await window.submitPost('eventos');
    await new Promise(r => setTimeout(r, 20));
    assert(lastInsert.eventos && lastInsert.eventos.event_date === expectedPastDs, 'a PAST date picked in the month calendar is sent as event_date — nothing blocks it, unlike Ofertas\' occupied/free slot calendar');
    window.closeModal();

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

    // Perdidos: the contact toggle defaults to "sí" and the number is
    // pre-filled from the account, so a normal report still carries a phone
    // plus the full set of contact channels.
    await window.openPost('perdidos');
    doc.getElementById('pf-name').value = 'Gato perdido de prueba';
    delete lastInsert.perdidos;
    await window.submitPost('perdidos');
    await new Promise(r => setTimeout(r, 20));
    assert(lastInsert.perdidos && lastInsert.perdidos.contact_phone === '+529811234567', 'Perdidos: with the contact toggle at its "sí" default, the report carries the account phone (pre-filled)');
    assert(Array.isArray(lastInsert.perdidos.contact_methods) && lastInsert.perdidos.contact_methods.length === 3, 'Perdidos: all three contact channels are attached by default');

    // …but toggling it off attaches no contact at all.
    await window.openPost('perdidos');
    doc.getElementById('pf-name').value = 'Reporte sin contacto';
    window.segPick(doc.querySelector('#pf-want_contact .seg-btn[data-v="no"]'));
    delete lastInsert.perdidos;
    await window.submitPost('perdidos');
    await new Promise(r => setTimeout(r, 20));
    assert(lastInsert.perdidos && lastInsert.perdidos.contact_phone === null && lastInsert.perdidos.contact_methods === null, 'Perdidos: choosing "No hace falta" attaches neither number nor channels, even though the field was pre-filled');

    // Empleos: company name is optional now (anonymity).
    await window.openPost('empleos');
    doc.getElementById('pf-title').value = 'Se busca ayudante';
    doc.getElementById('pf-co').value = '';
    window.segPick(doc.querySelector('#pf-want_contact .seg-btn[data-v="no"]'));
    delete lastInsert.empleos;
    await window.submitPost('empleos');
    await new Promise(r => setTimeout(r, 20));
    assert(lastInsert.empleos && lastInsert.empleos.company === null && lastInsert.empleos.contact_phone === null, 'Empleos: a blank business name is stored as null (not ""), and the contact toggle can suppress the number');

    // …and with the toggle on, an empleo carries the phone + chosen channels.
    await window.openPost('empleos');
    doc.getElementById('pf-title').value = 'Se busca cajero';
    window.segPick(doc.querySelector('#pf-want_contact .seg-btn[data-v="si"]'));
    doc.getElementById('pf-contact_phone').value = '981 444 5555';
    window.multiPick(doc.querySelector('#pf-contact_methods .mchip[data-v="llamada"]')); // WhatsApp + SMS only
    delete lastInsert.empleos;
    await window.submitPost('empleos');
    await new Promise(r => setTimeout(r, 20));
    assert(lastInsert.empleos && lastInsert.empleos.contact_phone === '981 444 5555' && Array.isArray(lastInsert.empleos.contact_methods) && lastInsert.empleos.contact_methods.includes('whatsapp') && lastInsert.empleos.contact_methods.includes('sms') && !lastInsert.empleos.contact_methods.includes('llamada'), 'Empleos: "sí, que me contacten" writes contact_phone + exactly the contact_methods left selected');

    // Avisos contact field is still pre-filled from the account.
    await window.openPost('avisos');
    assert(doc.getElementById('pf-contact_phone').value === '+529811234567', 'Avisos contact field is pre-filled from the account\'s phone for a signed-in user');

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
    assert(text('modal-body').includes('Taco Loco'), 'the signed-in account view shows the verified business as a single tappable box');
    assert(text('modal-body').includes("openBusinessProfile()") && !text('modal-body').includes('Editar mi negocio'), 'the account view has ONE business box (no separate edit button) — it opens the business profile');

    // The business profile sub-view: full record + the edit action, one tap in.
    await window.openBusinessProfile();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Mi negocio', 'tapping the business box opens the business profile view');
    assert(text('modal-body').includes('Taco Loco') && text('modal-body').includes('Lun-Sáb 9am-8pm'), 'the profile shows the full business record, not just the name');
    assert(text('modal-body').includes('Editar negocio'), 'the profile carries the edit action that sends changes back to review');
    assert(!text('modal-body').includes('Actualizar a Premium'), 'Premium upsell stays hidden for admin accounts — admin already has premium (and more) rights');
    window.mcModalBack();
    assert(text('modal-title') === 'Tu cuenta', 'closing the business profile returns to the account view, not the home screen');

    // Same business, same approved status — only is_admin changes — proves the admin check is what gates the upsell.
    currentProfile.is_admin = false;
    await window.openAccount(); // refresh the account view so lastFetchedAccount reflects the non-admin state
    await window.openBusinessProfile();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-body').includes('Actualizar a Premium'), 'a non-admin with the exact same approved, non-premium business DOES see the upsell in the profile');
    window.mcModalBack();
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
    assert(text('modal-title') === 'Mi negocio' && doc.getElementById('modal-bg').classList.contains('on'), 'after saving an edit you land back on the business profile, not dumped to the home screen');
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

    // ══════════════ Eventos: pay-to-feature ($99, 3-day window) ══════════════
    // want_feature='no' (the default seg option): the event submits for
    // free through the normal queue, no Stripe redirect / pending-feature
    // state at all.
    await window.openPost('eventos');
    doc.getElementById('pf-name').value = 'Evento sin destacar';
    doc.getElementById('pf-loc').value = 'Centro';
    delete lastInsert.eventos;
    window.sessionStorage.removeItem('mc_pending_evento_feature');
    await window.submitPost('eventos');
    await new Promise(r => setTimeout(r, 20));
    assert(lastInsert.eventos && lastInsert.eventos.title === 'Evento sin destacar', 'submitting a new event with want_feature="no" calls MC.submitEvento');
    assert(!window.sessionStorage.getItem('mc_pending_evento_feature'), 'no pending-feature state (and so no Stripe redirect) happens when want_feature is "no"');
    assert(text('toast') === 'Enviado — en revisión antes de publicarse ✓', 'the normal free-submission toast fires, same as any other event');

    // want_feature='si' + a picked window: MC.submitEvento must run FIRST
    // (the free event always goes out — featuring is a paid add-on after,
    // never a gate on the free submission), THEN the pending eventId+
    // startDs is persisted to sessionStorage before redirecting to pay.
    // jsdom can't actually follow a cross-origin window.location.href
    // redirect (same limitation the Ofertas payment-redirect test above
    // already works around), and Storage objects (sessionStorage) are
    // legacy platform objects whose built-in methods (setItem) can't be
    // monkey-patched/spied on the way a plain object or window.open can
    // — an attempted override is silently dropped per spec, so ordering
    // isn't verified via a runtime spy. It's instead guaranteed by
    // submitPost's own code shape: sessionStorage.setItem for the pending
    // feature data is a single synchronous line that textually follows,
    // and is unreachable without first passing, the `await
    // MC.submitEvento(data)` call and its error check — so seeing BOTH
    // the real insert (lastInsert.eventos) and the persisted pending
    // record below is exactly what "submitEvento ran first" looks like.
    await window.openPost('eventos');
    doc.getElementById('pf-name').value = 'Evento destacado';
    doc.getElementById('pf-loc').value = 'Centro';
    window.segPick(doc.querySelector('#pf-want_feature .seg-btn[data-v="si"]'));
    const featureCell = doc.querySelector('#pf-feature_start .slot-day:not(.full)');
    assert(!!featureCell, 'the feature-window calendar rendered at least one available start day');
    window.pickFeatureDay(featureCell, false);
    const featureStartDs = featureCell.dataset.ds;
    delete lastInsert.eventos;
    await window.submitPost('eventos');
    await new Promise(r => setTimeout(r, 20));
    assert(lastInsert.eventos && lastInsert.eventos.title === 'Evento destacado', 'MC.submitEvento (the free event insert) is called even when featuring is requested');
    const pendingFeatureRaw = window.sessionStorage.getItem('mc_pending_evento_feature');
    assert(!!pendingFeatureRaw, 'the pending eventId+startDs is persisted to sessionStorage before the payment redirect');
    const pendingFeature = JSON.parse(pendingFeatureRaw);
    assert(typeof pendingFeature.eventId === 'string' && pendingFeature.eventId.length > 0 && pendingFeature.startDs === featureStartDs, 'the persisted pending data carries the real new event id and the chosen feature-window start date');

    // Simulate landing back from Stripe with ?paid=evento_feature.
    window.history.pushState({}, '', '/?paid=evento_feature');
    delete lastInsert.eventos_featured_bookings;
    await window.checkPaymentReturn();
    await new Promise(r => setTimeout(r, 20));
    assert(lastInsert.eventos_featured_bookings && lastInsert.eventos_featured_bookings.event_id === pendingFeature.eventId && lastInsert.eventos_featured_bookings.start_date === pendingFeature.startDs, 'checkPaymentReturn calls MC.submitEventoFeature with the real eventId/startDs read back from sessionStorage');
    assert(text('toast') === '¡Pago recibido! Tu evento quedará destacado en esas fechas ✓', 'a successful feature booking shows the right confirmation toast');
    assert(!window.sessionStorage.getItem('mc_pending_evento_feature'), 'sessionStorage is cleared after the feature booking completes, so a page refresh cannot re-submit it');

    // featureWindowWouldBeFull: 4 existing bookings all covering the same
    // 3-day window should block ANY start day whose own 3-day span
    // touches a day already at the 4-booking cap, and allow any start day
    // whose span avoids it entirely.
    SAMPLE.eventos_featured_bookings = [
      { start_date: ds(10), end_date: ds(12) },
      { start_date: ds(10), end_date: ds(12) },
      { start_date: ds(10), end_date: ds(12) },
      { start_date: ds(10), end_date: ds(12) },
    ];
    await window.openPost('eventos'); // re-fetches MC.fetchFeaturedBookings() and recomputes featuredBookingCounts
    assert(window.featureWindowWouldBeFull(ds(10)) === true, 'a start day that itself is already at the 4-booking cap is full');
    assert(window.featureWindowWouldBeFull(ds(8)) === true, 'a start day whose 3-day span extends INTO a capped day is full');
    assert(window.featureWindowWouldBeFull(ds(12)) === true, 'a start day whose 3-day span BEGINS on the last capped day is full');
    assert(window.featureWindowWouldBeFull(ds(13)) === false, 'a start day whose 3-day span never touches a capped day is available');
    SAMPLE.eventos_featured_bookings = [];
    window.closeModal();

    // ══════════════ Eventos Step 3: featured big-card + grouped list,
    //    Inicio featured slot, redesigned "Eventos de hoy" ══════════════
    // 3 overlapping active bookings (today falls within each window) —
    // activeFeaturedEventIds() rotates hourly through whichever are
    // active. WHICH 2 of the 3 show depends on the real current hour, so
    // what's actually deterministic (and tested) is membership in the
    // active set, the rotation-consistency rule (Inicio's 1 == the
    // Eventos section's first of 2), and that the render genuinely
    // reflects whatever the real function returns.
    // e1/e2/e4 (not e5 — e5 is a FINISHED event, and evtInDateRange()
    // hides finished events from every date-filter bucket except
    // Pasados regardless of featured status, so it could never render
    // here at all under the default "Todas las fechas" filter this test
    // runs under).
    SAMPLE.eventos_featured_bookings = [
      { event_id: 'e1', start_date: ds(-1), end_date: ds(1) },
      { event_id: 'e2', start_date: ds(-1), end_date: ds(1) },
      { event_id: 'e4', start_date: ds(-1), end_date: ds(1) },
    ];
    await window.refreshContent();
    const activeSet = ['e1', 'e2', 'e4'];
    const two = window.activeFeaturedEventIds(2);
    const one = window.activeFeaturedEventIds(1);
    assert(two.length === 2 && new Set(two).size === 2 && two.every(id => activeSet.includes(id)), 'activeFeaturedEventIds(2) returns exactly 2 distinct ids, both drawn from the active set');
    assert(one.length === 1 && activeSet.includes(one[0]), 'activeFeaturedEventIds(1) returns exactly 1 id, drawn from the active set');
    assert(one[0] === two[0], 'Inicio\'s one slot always matches the first of the Eventos section\'s two — same starting rotation index');

    // renderEventos(): exactly the activeFeaturedEventIds(2) events use
    // the big .evt-card + Destacado badge; every other visible event
    // renders under .evt-list-item, grouped by date under one
    // .evt-group-hdr per distinct date, ascending.
    const evtListHtml = text('evt-list');
    const evtListEl = doc.getElementById('evt-list');
    two.forEach(id => {
      const title = SAMPLE.eventos.find(x => x.id === id).title;
      const card = [...evtListEl.querySelectorAll('.evt-card')].find(c => c.textContent.includes(title));
      assert(!!card, `the featured event "${title}" renders as a big .evt-card`);
      assert(!!(card && card.querySelector('.evt-featured-badge')), `"${title}"'s card carries the Destacado badge`);
    });
    // e2 is status:'pending' but the fake ignores status filters on plain
    // reads (same reason it already surfaces in evt-list elsewhere in
    // this suite) — so it's a legitimate non-featured candidate here too
    // whenever the rotation doesn't happen to pick it.
    ['e1', 'e2', 'e4'].filter(id => !two.includes(id)).forEach(id => {
      const title = SAMPLE.eventos.find(x => x.id === id).title;
      const item = [...evtListEl.querySelectorAll('.evt-list-item')].find(c => c.textContent.includes(title));
      assert(!!item, `the non-featured event "${title}" renders under the compact .evt-list-item, not the big card`);
    });
    const groupHdrs = [...evtListEl.querySelectorAll('.evt-group-hdr')].map(h => h.textContent);
    assert(groupHdrs.length > 0 && groupHdrs.length === new Set(groupHdrs).size, 'the regular events render grouped under one .evt-group-hdr per distinct date — no duplicates');

    // Down to a single active booking: no duplication, both calls
    // collapse to that one id.
    SAMPLE.eventos_featured_bookings = [{ event_id: 'e4', start_date: ds(-1), end_date: ds(1) }];
    await window.refreshContent();
    assert(JSON.stringify(window.activeFeaturedEventIds(1)) === JSON.stringify(['e4']), 'with only 1 active booking, activeFeaturedEventIds(1) returns just that one id');
    assert(JSON.stringify(window.activeFeaturedEventIds(2)) === JSON.stringify(['e4']), 'and activeFeaturedEventIds(2) also returns just that one id — no duplication when fewer bookings exist than requested');

    // renderFeaturedEventoSection(): shows e4's .evt-card on Inicio while
    // its booking is the sole active one...
    assert(text('dash-featured-evento').includes('evt-card') && text('dash-featured-evento').includes('Mi evento activo'), 'Inicio shows the currently-featured event in the same .evt-card style');
    // ...and renders nothing at all once there are no active bookings.
    SAMPLE.eventos_featured_bookings = [];
    await window.refreshContent();
    assert(text('dash-featured-evento') === '', 'Inicio\'s featured slot renders nothing when no featured booking is currently active');

    // renderEventosHoySection(): ALL of today's events show (e6/e7/e8 —
    // not capped at 2), and with e8 featured (deliberately the LATEST by
    // clock time, 9pm), it sorts first anyway; the rest fall back to
    // ascending time (e7 3pm before e6 7pm).
    SAMPLE.eventos_featured_bookings = [{ event_id: 'e8', start_date: ds(-1), end_date: ds(1) }];
    await window.refreshContent();
    const hoyHtml = text('dash-eventos-hoy');
    assert(hoyHtml.includes('Evento de hoy A') && hoyHtml.includes('Evento de hoy B') && hoyHtml.includes('Evento de hoy C'), 'Eventos de hoy shows every one of today\'s events, not a capped sample');
    const idxA = hoyHtml.indexOf('Evento de hoy A'), idxB = hoyHtml.indexOf('Evento de hoy B'), idxC = hoyHtml.indexOf('Evento de hoy C');
    assert(idxC < idxA && idxC < idxB, 'the featured-today event (C, 9pm — chronologically LAST) sorts first regardless of its own time');
    assert(idxB < idxA, 'the remaining events fall back to ascending time order (B at 3pm before A at 7pm)');
    assert(hoyHtml.includes('dc-evt-thumb'), 'each Eventos de hoy card shows an image thumbnail, not the old date box');

    SAMPLE.eventos_featured_bookings = [];
    await window.refreshContent();

    // ── Admin unified Pendiente queue (this fixture account is_admin: true) ──
    await window.openAccount();
    assert(text('modal-body').includes('Pendiente'), 'signed-in admin sees the unified Pendiente entry point (a non-admin would not)');

    await window.openPending();
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Pendiente (23)', 'queue aggregates pending items across the content tables (incl. the extra eventos duplicate-check row, one alerta, the four extra owner-tagged perdidos/avisos rows, the two extra owner-tagged eventos rows the Mis-publicaciones tests add, the extra public past-eventos row the Pasados-filter test adds, the extra empleos row the openEmpleo test adds, and the three extra public today-eventos rows the Eventos-de-hoy redesign test adds) plus business verification requests (phone/password requests from earlier tests are already resolved by this point)');

    // ── Alertas: pipeline-fed, owner-less, but still a real moderation item ──
    assert(text('modal-body').includes('Corte de agua programado en Zona Norte'), 'a pending alerta (no submitter) shows up in the unified queue, listed by its title');
    assert(text('modal-body').includes('Alerta'), 'the alerta row carries its "Alerta" type label');
    window.openModerationDetail('alertas', 'al1');
    assert(text('modal-title') === 'Alerta', 'opening the alerta shows its detail screen');
    assert(text('modal-body').includes('Enviado por Automático'), 'an owner-less alerta shows a synthetic submitter, not "Vecino"');
    assert(text('modal-body').includes('Zona test') && text('modal-body').includes('JAPAY'), 'the alerta detail renders its real fields (zona, fuente) from MODERATION_DETAIL_FIELDS');
    assert(text('modal-body').includes('Aprobar') && text('modal-body').includes('Rechazar'), 'the same approve/reject flow is available on an alerta');
    const refreshCountBeforeModerate = refreshContentCallCount;
    await window.moderateItem('alertas', 'al1', 'published');
    await new Promise(r => setTimeout(r, 20));
    assert(lastUpdate.alertas && lastUpdate.alertas.status === 'published', 'approving an alerta sends status: published to Supabase like any other table');
    assert(refreshContentCallCount > refreshCountBeforeModerate, 'a successful moderateItem() call re-fetches/re-renders the public content lists, so a newly-approved item appears immediately');
    // moderateItem's success path already stepped back to the list (one
    // level above the account view) — same modal state the block below
    // expects right after the initial openPending().

    // ── Nested modal views: ✕ / back / hardware-back step ONE level
    //    (item review → list → account → home), never straight out. ──
    window.mcModalBack();
    assert(text('modal-title') === 'Tu cuenta', 'closing the Pendiente list returns to the account view it was opened from — not the home screen');
    assert(doc.getElementById('modal-bg').classList.contains('on'), 'and the modal itself stays open');
    await window.openPending();
    await new Promise(r => setTimeout(r, 20));
    window.openModerationDetail('avisos', 'av1');
    assert(text('modal-title') === 'Aviso', 'set-up: an item is open for review');
    window.mcModalBack();
    assert(/^Pendiente \(\d+\)$/.test(text('modal-title')), 'closing an item under review returns to the Pendiente list, not the account view or home');
    window.mcModalBack();
    window.mcModalBack();
    assert(!doc.getElementById('modal-bg').classList.contains('on'), 'backing out past the account view finally closes the whole modal');
    await window.openAccount();
    await window.openPending();
    await new Promise(r => setTimeout(r, 20));

    // The whole point of this change: a business verification request
    // should show enough to actually review, not just a name.
    window.openModerationDetail('businesses', currentBusiness.id);
    assert(text('modal-body').includes('Tacos al pastor'), 'business detail view shows the real description, not just the business name');
    assert(text('modal-body').includes('Lun-Sáb 9am-8pm'), 'business detail view shows hours');
    assert(text('modal-body').includes('instagram.com/tacolocotest'), 'business detail view shows the social/website link');
    window.renderPendingQueue();
    assert(!text('modal-body').includes('Aprobar') && !text('modal-body').includes('Rechazar'), 'the LIST no longer has blind approve/reject buttons — reviewing detail is required first');

    // Reviewing a pending event runs a same-day duplicate check, so a
    // re-post of an already-listed event is obvious at the approval stage.
    window.openModerationDetail('eventos', 'e1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-body').includes('Otros eventos el'), 'event moderation detail runs a same-day duplicate check');
    assert(text('modal-body').includes('Evento de prueba (posible copia)'), 'the duplicate check lists the OTHER event on that date');
    assert(text('modal-body').includes('HORA SIMILAR'), 'an event within a few hours of the submission is flagged as a likely duplicate');
    window.renderPendingQueue();

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
    assert(text('modal-title') === 'Pendiente (22)', 'rejected item is removed from the queue and the count updates');

    // Approve, now via the detail screen (not the list). Noticias gets a
    // bespoke moderation view instead of the generic field dump — real
    // headline/source, a genuinely clickable link to the original post,
    // the internal source excerpt (admin-only reference, never published),
    // and an editable, optional summary box above Aprobar.
    window.openModerationDetail('noticias', 'n1');
    assert(text('modal-body').includes('Titular actualizado por pull-to-refresh') && text('modal-body').includes('Reportero X'), 'the noticia moderation view shows the real headline and source');
    const noticiaLink = doc.querySelector('#modal-body a[href="https://example.com"]');
    assert(!!noticiaLink && noticiaLink.target === '_blank', 'the source is a genuinely clickable link to the original post, not plain text');
    assert(text('modal-body').includes('Nota de prueba, no se publica.'), 'the internal source excerpt is shown for the admin\'s own reference');
    const summaryBox = doc.getElementById('noticia-summary-input');
    assert(!!summaryBox, 'an editable, optional summary box is present above the approve button');
    assert(summaryBox.value === 'Resumen', 'the box is pre-filled with any summary the row already has');

    // Leave the box blank (whitespace-only counts as blank) and approve —
    // this is the path that makes the public card show headline+image+
    // source only, with no description line.
    summaryBox.value = '   ';
    await window.approveNoticia('n1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast') === 'Publicado ✓', 'approving a noticia shows the right confirmation toast');
    assert(lastUpdate.noticias && lastUpdate.noticias.status === 'published' && lastUpdate.noticias.summary === null, 'a blank (or whitespace-only) summary box sends summary: null, not an empty string — never silently overwritten with junk');

    // The fake client's update() doesn't mutate SAMPLE (that persistence is
    // Supabase's job, tested at the DB level) — so mutate it directly here
    // to reflect what the row now looks like after approval, and re-fetch
    // for real to prove the RENDER side too: no summary → no empty
    // description line, just headline/image/source, matching what was
    // asked for.
    SAMPLE.noticias[0].summary = null;
    await window.refreshContent();
    assert(!text('news-list').includes('news-desc'), 'once a noticia has no summary, the public card omits the description line entirely instead of rendering it empty');
    assert(text('news-list').includes('Titular actualizado por pull-to-refresh'), 'the headline still renders with no summary');

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
    await new Promise(r => setTimeout(r, 20)); // the "N no aprobadas" count loads after the view paints, then re-renders
    assert(text('modal-body').includes('Mis publicaciones'), 'the account view has a "Mis publicaciones" entry for every signed-in resident');
    assert(text('modal-body').includes('2 no aprobadas'), 'it flags the count of rejected posts inline — now includes pf3, a rejected report with rejection_reason left null (e.g. an admin "Quitar" with no typed message), which used to be undercounted');
    assert(!text('modal-body').includes('La descripción no es clara'), 'the full rejection reason is no longer duplicated inline in the account view — it lives in the Mis publicaciones view now');

    // ── Mis publicaciones: the resident-facing sibling of the admin
    //    Pendiente view. MC.fetchMyPosts returns THIS user's rows across the
    //    self-editable tables, any status, excluding other users' and the
    //    owner-less alertas table. Now split into Pendiente/Activo/
    //    Finalizado tabs — e3 (finished event) and e4 (active event) added
    //    to the fixtures specifically to exercise the new Finalizado split. ──
    await window.openMyPosts();
    await new Promise(r => setTimeout(r, 20));
    const mp = () => text('modal-body');
    assert(/^Mis publicaciones \(6\)$/.test(text('modal-title')), 'lists exactly the current user\'s own posts — av1 (rejected) + av2 (published) in avisos, pf2 (pending) + pf3 (rejected, no reason) in perdidos, e3 (finished) + e4 (active) in eventos');
    // Default tab is Pendiente, and it buckets rejected alongside true
    // pending — neither is currently live, both need the submitter's attention.
    assert(mp().includes('Pendiente (3)') && mp().includes('Activo (2)') && mp().includes('Finalizado (1)'), 'the three tabs show the right per-bucket counts: av1 (rejected) + pf2 (pending) + pf3 (rejected) in Pendiente, av2 + e4 in Activo, e3 in Finalizado');
    assert(mp().includes('Aviso test') && mp().includes('No aprobado') && mp().includes('La descripción no es clara'), 'a rejected post shows the "No aprobado" badge with the rejection reason inline');
    assert(mp().includes('Mi reporte pendiente') && mp().includes('En revisión'), 'a pending post from a DIFFERENT table shows the "En revisión" badge');
    assert(!mp().includes('Mi aviso publicado'), 'a published (active) post does not show up in the default Pendiente tab');
    assert(!mp().includes('Reporte de otra persona'), 'another user\'s post never appears — fetchMyPosts is scoped to the owner');
    assert(!mp().includes('Corte de agua programado en Zona Norte'), 'alertas (owner-less) is excluded from Mis publicaciones entirely');
    // A rejected post keeps its explicit "Editar y reenviar" action. The
    // old separate "Descartar" text button is gone — discard is now a
    // universal trash-icon action in the card header for EVERY status,
    // backed by the widened "owner can delete own row, any status" RLS
    // policy (previously rejected-only).
    assert(mp().includes('Editar y reenviar'), 'a rejected post\'s card still shows "Editar y reenviar"');
    assert(mp().includes("confirmDiscardMyPost('avisos','av1')"), 'a rejected post\'s card carries the universal discard (trash icon) action, targeting its own table/id');
    assert(mp().includes("confirmDiscardMyPost('perdidos','pf2')"), 'a non-rejected (pending) post\'s card ALSO carries the discard action, now that the DB allows discarding any status');
    assert(mp().includes("openMyPostEdit('perdidos','pf2')"), 'a plain pending (non-rejected, non-rejected-styled) post is still whole-card tappable into edit, same as before');

    // Switch to Activo: the published aviso shows up here instead, with
    // no "Editar y reenviar" (that stays rejected-only) but it DOES still
    // get the universal discard action.
    window.setMyPostsTab('active');
    assert(mp().includes('Mi aviso publicado') && mp().includes('Publicado'), 'a published post shows the "Publicado" badge, now under the Activo tab');
    assert(mp().includes('Mi evento activo'), 'the future-dated eventos row appears under Activo');
    assert(!mp().includes('Mi evento finalizado'), 'the past-dated eventos row does not appear under Activo');
    assert(!mp().includes('Editar y reenviar'), 'a non-rejected item never shows the rejected-specific "Editar y reenviar" action');
    assert(mp().includes("confirmDiscardMyPost('avisos','av2')"), 'a published (active) post still carries the universal discard action');
    assert(mp().includes("openMyPostEdit('avisos','av2')"), 'a published, still-editable row is tappable straight into its edit form');

    // Switch to Finalizado: only the past-dated event, correctly relabeled
    // even though its raw DB status is still 'published'.
    window.setMyPostsTab('finished');
    assert(mp().includes('Mi evento finalizado') && mp().includes('Finalizado'), 'the finished event shows the "Finalizado" badge');
    assert(!mp().includes('Mi evento activo'), 'the future-dated event does not appear under Finalizado');

    // Back to Pendiente for the edit-and-resend flow below.
    window.setMyPostsTab('pending');

    // Tapping a row opens the reused post form, pre-filled, routed to an UPDATE.
    await window.openMyPostEdit('avisos', 'av1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Editar publicación' && doc.getElementById('pf-title').value === 'Aviso test', 'the edit form is the real post form, pre-filled with the post\'s current data');
    assert(doc.getElementById('post-submit-btn').textContent === 'Guardar cambios', 'its submit button says "Guardar cambios", not "Enviar para revisión"');
    doc.getElementById('pf-title').value = 'Aviso test (corregido)';
    delete lastUpdate.avisos;
    const refreshCountBeforeSelfEdit = refreshContentCallCount;
    await window.submitPost('avisos');
    await new Promise(r => setTimeout(r, 20));
    assert(lastUpdate.avisos && lastUpdate.avisos.title === 'Aviso test (corregido)' && lastUpdate.avisos.category === 'Comunidad', 'saving routes through MC.updatePost — the edited fields reach the row');
    assert(lastUpdate.avisos.submitted_by === undefined, 'the client never sends submitted_by on a self-edit — the DB trigger owns that');
    assert(lastUpdate.avisos.status === 'pending' && lastUpdate.avisos.rejection_reason === null, 'the client explicitly re-queues a self-edit as pending and clears any prior rejection reason — this must not rely solely on the edit trigger, since that trigger deliberately no-ops for an admin editing their own post');
    assert(text('toast') === 'Cambios guardados — vuelve a revisión ✓', 'a confirmation toast fires after a successful self-edit');
    assert(refreshContentCallCount > refreshCountBeforeSelfEdit, 'a successful self-edit re-fetches/re-renders the public content lists too, not just Mis Publicaciones');

    // ── Eventos month calendar: self-editing e3 (event_date 8 days in the
    //    past) should open the calendar already showing THAT event's month
    //    with that exact day pre-selected — MY_POST_EDIT.eventos moved
    //    `date` out of the plain `input` bucket into a new `monthcal`
    //    bucket specifically so applyPostEditFill can drive this. ──
    const MCAL_MONTHS_ES_TEST = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const e3Raw = SAMPLE.eventos.find(x => x.id === 'e3');
    const e3Date = new Date(e3Raw.event_date + 'T12:00:00');
    await window.openMyPostEdit('eventos', 'e3');
    await new Promise(r => setTimeout(r, 20));
    assert(text('modal-title') === 'Editar publicación' && !!doc.getElementById('pf-date-cal'), 'self-editing an event opens the real post form with the month-calendar field');
    const e3ExpectedLabel = `${MCAL_MONTHS_ES_TEST[e3Date.getMonth()]} ${e3Date.getFullYear()}`;
    assert((text('pf-date-cal') || '').includes(e3ExpectedLabel), 'the calendar opens already showing that event\'s own month, not the current month');
    let selCell = doc.querySelector('#pf-date-cal .mcal-day.sel');
    assert(!!selCell && Number(selCell.textContent.trim()) === e3Date.getDate(), 'and with that event\'s exact day already pre-selected');
    // Featuring is a fresh-submission-only add-on (out of scope to offer
    // during self-edit) — both new rows must be hidden here.
    assert(doc.getElementById('row-want_feature') && doc.getElementById('row-want_feature').style.display === 'none', 'self-editing an event hides the "¿Quieres destacar tu evento?" row');
    assert(doc.getElementById('row-feature_start') && doc.getElementById('row-feature_start').style.display === 'none', 'self-editing an event hides the feature-window calendar row');

    // Prev/next navigation re-renders the grid for the adjacent month, and
    // only keeps the sel highlight when the selected date actually falls
    // within whatever month is now showing.
    window.shiftMonthCal('date', 1); // one month forward from e3's month — the selected day does NOT live here
    assert(!doc.querySelector('#pf-date-cal .mcal-day.sel'), 'navigating to a month that doesn\'t contain the selected date shows no sel highlight at all');
    window.shiftMonthCal('date', -1); // back to e3's real month
    selCell = doc.querySelector('#pf-date-cal .mcal-day.sel');
    assert(!!selCell && Number(selCell.textContent.trim()) === e3Date.getDate(), 'navigating back to the month that DOES contain the selected date re-shows its sel highlight — the selection itself was never lost, just not rendered while viewing elsewhere');
    window.mcModalBack('myPosts');

    // ── "Descartar" on a rejected post: a real DELETE (RLS-gated to
    //    status='rejected' rows, verified live against Supabase — nothing
    //    to re-test here beyond that the client wires the call correctly). ──
    window.confirmDiscardMyPost('avisos', 'av1');
    assert(text('modal-title') === 'Descartar publicación', 'confirming discard opens its own confirm screen');
    assert(text('modal-body').includes('Aviso test'), 'the confirm screen shows which post is about to be deleted');

    forcedErrors.delete.avisos = { message: 'simulated delete failure' };
    await window.discardMyPost('avisos', 'av1');
    await new Promise(r => setTimeout(r, 20));
    assert(text('toast').includes('No se pudo descartar'), 'a forced delete error shows the real error toast');
    assert(text('modal-title') === 'Descartar publicación', 'a failed delete leaves the confirm screen up rather than silently closing/removing anything');
    forcedErrors.delete.avisos = null;

    delete lastDelete.avisos;
    await window.discardMyPost('avisos', 'av1');
    await new Promise(r => setTimeout(r, 20));
    assert(lastDelete.avisos === 'av1', 'discardMyPost calls through to MC.deleteMyPost, which deletes exactly the targeted row (table + id)');
    assert(text('toast') === 'Publicación descartada', 'a successful discard shows its own confirmation toast');
    assert(text('modal-title').startsWith('Mis publicaciones'), 'a successful discard returns to the Mis publicaciones list');

    // Back out to the account view for the admin test that follows.
    window.mcModalBack('account');
    await new Promise(r => setTimeout(r, 10));

    // ── Admin: long-press (right-click on desktop) any published card to
    //    pull it from public view, with an optional note to the submitter.
    //    This is a new UI entry point onto the existing generic
    //    MC.moderatePost(table,id,'rejected',msg) path. openAccount() above
    //    left lastFetchedAccount pointing at this admin account. ──
    window.renderAvisos();
    const avAdmCard = doc.querySelector('#av-list [data-adm-rm="avisos|av1"]');
    assert(!!avAdmCard, 'published Avisos cards carry a data-adm-rm hook for the admin remove gesture');
    avAdmCard.dispatchEvent(new window.Event('contextmenu', { bubbles: true, cancelable: true }));
    assert(text('modal-title') === 'Quitar publicación', 'right-click / long-press on a published card opens the admin remove confirm');
    doc.getElementById('adm-rm-msg').value = 'Contenido duplicado';
    delete lastUpdate.avisos;
    await window.confirmAdminRemove('avisos', 'av1');
    await new Promise(r => setTimeout(r, 20));
    assert(lastUpdate.avisos && lastUpdate.avisos.status === 'rejected' && lastUpdate.avisos.rejection_reason === 'Contenido duplicado', 'confirming sends status:rejected + the note to Supabase through MC.moderatePost — the same call the Pendiente queue uses');
    assert(text('toast') === 'Publicación retirada ✓', 'a confirmation toast fires after the removal');
    assert(!doc.getElementById('modal-bg').classList.contains('on'), 'the confirm modal closes itself after a successful removal');

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
