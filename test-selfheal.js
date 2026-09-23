/* Page-side build self-heal regression tests (index.html inline script). */
const { JSDOM } = require('jsdom'), fs = require('fs'), path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]).find((s) => s.includes('BUILD SELF-HEAL'));
if (!inline) { console.error('FAIL selfheal: could not find the BUILD SELF-HEAL inline script'); process.exit(1); }

function boot({ meta = 'B1', app = 'B1', client = 'B1', css, remote, heal = 0 }) {
  const dom = new JSDOM('<!doctype html><html><head><meta name="mc-build" content="' + meta + '"></head><body><div id="modal-bg"></div><div id="menu-bg"></div><div id="wx-lb-bg"></div></body></html>', { url: 'https://micampeche.app/?source=pwa', runScripts: 'outside-only', pretendToBeVisual: true });
  const w = dom.window, log = { navs: [], unreg: 0, cachesDeleted: [], updates: 0, fetches: [] };
  w.MC_BUILD = app; w.MC_BUILD_CLIENT = client; w.__mcHealDelay = 50; w.__navs = log.navs;
  if (css !== undefined) w.getComputedStyle = () => ({ getPropertyValue: () => '"' + css + '"' });
  if (heal) w.sessionStorage.setItem('mc_heal_count', String(heal));
  w.fetch = async (u) => { log.fetches.push(String(u)); return { ok: true, json: async () => ({ build: remote }) }; };
  const reg = { unregister: async () => { log.unreg++; }, update: async () => { log.updates++; } };
  Object.defineProperty(w.navigator, 'serviceWorker', { value: { getRegistrations: async () => [reg], register: async () => reg, addEventListener() {}, controller: {} }, configurable: true });
  w.caches = { keys: async () => ['micampeche-old'], delete: async (k) => { log.cachesDeleted.push(k); return true; } };
  Object.defineProperty(w.navigator, 'onLine', { value: true, configurable: true });
  // jsdom can't navigate: redirect the one navigation helper, and expose the script's private state.
  w.eval(inline.replace('function mcNavigate(url){location.replace(url);}', 'function mcNavigate(url){window.__navs.push(url);}')
    + '\nwindow.__state=()=>({pending:mcHealPendingFor});window.__setReloadPending=(v)=>{swReloadPending=v;};');
  return { w, log };
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const out = []; let t;
  t = boot({}); await sleep(30);
  out.push(['consistent build: nothing happens', t.log.navs.length === 0 && t.log.unreg === 0]);
  t = boot({ meta: 'NEW', app: 'OLD' }); await sleep(30);
  out.push(['mixed builds (html NEW / app OLD): unregisters worker, clears caches, reloads on a unique URL', t.log.unreg === 1 && t.log.cachesDeleted.includes('micampeche-old') && t.log.navs.length === 1 && /\/\?b=\d+$/.test(t.log.navs[0])]);
  t = boot({ css: 'OLD' }); await sleep(30);
  out.push(['css build differs: heals', t.log.navs.length === 1]);
  t = boot({ css: '' }); await sleep(30);
  out.push(['unreadable css variable is ignored, not treated as a mismatch', t.log.navs.length === 0]);
  t = boot({ meta: 'NEW', app: 'OLD', heal: 2 }); await sleep(30);
  out.push(['loop guard: no third rebuild in one session', t.log.navs.length === 0]);
  t = boot({ remote: 'B2' }); await t.w.mcCheckRemoteBuild({ update: async () => { t.log.updates++; } }); await sleep(150);
  out.push(['newer remote build: version.json fetched on a unique URL, worker update requested, rebuild armed', /\/version\.json\?t=\d+/.test(t.log.fetches[0]) && t.log.updates === 1 && t.w.__state().pending === 'B2']);
  t = boot({ remote: 'B1' }); await t.w.mcCheckRemoteBuild({ update: async () => { t.log.updates++; } }); await sleep(100);
  out.push(['remote == running: nothing armed', t.log.updates === 0 && t.w.__state().pending === null]);
  t = boot({ remote: 'B2' }); t.w.__setReloadPending(true); await t.w.mcCheckRemoteBuild({ update: async () => {} }); await sleep(150);
  out.push(['worker already updated (reload pending): no destructive rebuild', t.w.__state().pending === null]);
  t = boot({}); t.w.document.getElementById('modal-bg').classList.add('on'); Object.defineProperty(t.w.document, 'hidden', { value: false, configurable: true });
  t.w.mcHealWhenSafe('B2'); await sleep(50);
  out.push(['modal open: rebuild is deferred until a safe moment', t.log.navs.length === 0]);
  out.forEach(([n, p]) => console.log((p ? 'PASS ' : 'FAIL ') + 'selfheal: ' + n));
  process.exit(out.every((r) => r[1]) ? 0 : 1);
})();
