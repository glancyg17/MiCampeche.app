/* Service-worker regression tests. Runs sw.js in a simulated worker (no browser)
   against the failure that used to force people to clear browsing data: a CDN
   edge still serving the PREVIOUS deploy's files while the new sw.js installs. */
const vm = require('vm'), fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'sw.js'), 'utf8');
const BUILD = src.match(/const BUILD = '([^']+)'/)[1];
const BASE = 'https://example.test';

function makeEnv(serve) {
  const store = {}, handlers = {}, fetched = [];
  const pathOf = (req) => new URL(typeof req === 'string' ? req : req.url, BASE).pathname;
  const cachesFake = {
    async open(n) { store[n] = store[n] || new Map(); return { async put(k, res) { store[n].set(pathOf(k), res); }, async match(req) { return store[n].get(pathOf(req)); } }; },
    async match(req) { for (const m of Object.values(store)) { const r = m.get(pathOf(req)); if (r) return r.clone(); } },
    async keys() { return Object.keys(store); },
    async delete(n) { const had = n in store; delete store[n]; return had; },
  };
  const ctx = {
    self: { addEventListener: (t, f) => { handlers[t] = f; }, skipWaiting: async () => { ctx.skipped = true; }, clients: { claim: async () => {}, matchAll: async () => [] }, registration: {} },
    caches: cachesFake, Response, URL, setTimeout, console,
    Request: class extends Request { constructor(u, o) { super(typeof u === 'string' && u.startsWith('/') ? BASE + u : u, o); } },
    fetch: async (req) => { const url = new URL(typeof req === 'string' ? req : req.url, BASE); fetched.push(url.pathname + url.search); return serve(url); },
  };
  vm.createContext(ctx); vm.runInContext(src, ctx);
  return { ctx, handlers, store, fetched };
}
const body = (p, stamped) => p.endsWith('.png') ? 'PNG' : p === '/manifest.json' ? '{}' : 'content of ' + p + (stamped ? ' build ' + BUILD : '');
const ok = (t) => new Response(t, { status: 200 });
async function runInstall(env) { let p; env.handlers.install({ waitUntil: (x) => { p = x; } }); try { await p; return 'installed'; } catch (e) { return 'FAILED: ' + e.message; } }

(async () => {
  const res = [];
  let e = makeEnv((u) => ok(body(u.pathname, true)));
  res.push(['fresh CDN: install succeeds and caches every shell file', await runInstall(e) === 'installed' && e.ctx.skipped === true && e.store['micampeche-' + BUILD].size === 8]);

  e = makeEnv((u) => u.pathname === '/js/app.js' && !u.search ? ok(body(u.pathname, false)) : ok(body(u.pathname, true)));
  const r2 = await runInstall(e); const cached = await e.store['micampeche-' + BUILD].get('/js/app.js').text();
  res.push(['stale edge copy: retried via a unique URL, cached bytes ARE this build', r2 === 'installed' && cached.includes(BUILD) && e.fetched.some((f) => f.startsWith('/js/app.js?b=' + BUILD))]);

  e = makeEnv((u) => u.pathname === '/js/app.js' ? ok(body(u.pathname, false)) : ok(body(u.pathname, true)));
  const r3 = await runInstall(e);
  res.push(['persistently stale: install FAILS, no half-filled cache, worker not activated', r3.startsWith('FAILED') && !(('micampeche-' + BUILD) in e.store) && !e.ctx.skipped]);

  e = makeEnv((u) => u.pathname === '/css/styles.css' ? new Response('no', { status: 404 }) : ok(body(u.pathname, true)));
  res.push(['HTTP 404 on a shell file: install fails', (await runInstall(e)).startsWith('FAILED')]);

  e = makeEnv((u) => ok(body(u.pathname, true))); await runInstall(e);
  const tryFetch = async (url) => { let r = null; e.handlers.fetch({ request: new Request(BASE + url), respondWith: (p) => { r = p; } }); return r ? await (await r).text() : null; };
  const pwa = await tryFetch('/?source=pwa'), asset = await tryFetch('/js/app.js?v=' + BUILD), api = await tryFetch('/rest/v1/eventos');
  res.push(['/?source=pwa (the PWA start_url) is served from cache', !!pwa && pwa.includes(BUILD)]);
  res.push(['/js/app.js?v=BUILD is served from cache', !!asset && asset.includes(BUILD)]);
  res.push(['non-shell requests are not intercepted', api === null]);

  res.forEach(([n, p]) => console.log((p ? 'PASS ' : 'FAIL ') + 'sw: ' + n));
  process.exit(res.every((r) => r[1]) ? 0 : 1);
})();
