// MiCampeche service worker — deliberately conservative.
// Only the app shell (HTML/CSS/JS) is cached for offline access; everything
// else (images, external links, Supabase API calls) goes straight to the
// network. This avoids silently serving stale content the way a
// cache-everything strategy would.
// The cache name is derived from a build id stamped by scripts/stamp.js (npm run stamp) — never edit it by hand.
const BUILD = '30e1a65c45';                        // stamped by scripts/stamp.js (npm run stamp) — never edit by hand
const CACHE_NAME = 'micampeche-' + BUILD;   // one cache per build, so a deploy can never mix generations
const APP_SHELL = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/vendor/supabase.js',
  '/js/supabase-client.js',
  '/js/app.js',
  '/manifest.json',
  // A push can arrive while nothing has the app open, so the notification's
  // badge icon needs to be available without a network round-trip at that
  // moment — unlike the rest of assets/, which is deliberately left off
  // this list and fetched network-first (see the file header comment).
  '/assets/icons/notification-badge.png'
];

// Shell files that carry this build's id (stamped by scripts/stamp.js). A copy
// served from a CDN edge that cached it BEFORE the deploy will not contain it.
const STAMPED = ['/', '/index.html', '/css/styles.css', '/js/supabase-client.js', '/js/app.js'];

// attempt 0 bypasses the browser HTTP cache; later attempts ALSO add a unique
// query string, because CDN edges (Cloudflare, GitHub's Fastly) key their cache
// on the full URL — a unique URL can only be answered by the origin.
function fetchFresh(path, attempt) {
  const url = attempt === 0 ? path
    : path + (path.includes('?') ? '&' : '?') + 'b=' + BUILD + '-' + Date.now() + '-' + attempt;
  return fetch(new Request(url, { cache: 'reload' }));
}

// Only ever cache bytes that are provably THIS build. Anything else is retried
// (fresh URL) and, if it still isn't this build, the whole install fails — so
// the previous worker keeps running and the browser simply retries at its next
// update check. A poisoned cache (new HTML + old JS) is now impossible.
async function precache(cache) {
  await Promise.all(APP_SHELL.map(async (path) => {
    let lastErr;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await fetchFresh(path, attempt);
        if (!res.ok) throw new Error('precache ' + path + ' → HTTP ' + res.status);
        if (STAMPED.includes(path)) {
          const text = await res.clone().text();
          if (!text.includes(BUILD)) throw new Error('precache ' + path + ' is not build ' + BUILD + ' (stale CDN copy)');
        }
        await cache.put(path, res);
        return;
      } catch (err) {
        lastErr = err;
        await new Promise((r) => setTimeout(r, 700 * (attempt + 1)));
      }
    }
    throw lastErr;
  }));
}

self.addEventListener('install', (event) => {
  // Cache the new shell, then take over immediately — no "waiting" state.
  // The PAGE decides when to reload onto the new code (see the
  // controllerchange handling in index.html): silently while the app is
  // backgrounded, or at the next safe idle moment if it's in the
  // foreground. So updates land on their own without ever interrupting a
  // task, and there's nothing for anyone to tap.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => precache(cache))
      .then(() => self.skipWaiting())
      .catch(async (err) => {
        await caches.delete(CACHE_NAME);   // never leave a half-filled cache behind
        throw err;                         // install fails -> old worker stays; browser retries later
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) =>
        Promise.all(
          names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isAppShell = APP_SHELL.some((path) => url.pathname === path || (path === '/' && url.pathname === '/index.html'));

  if (isAppShell) {
    // App shell: cache-first, so the basic UI loads offline. ignoreSearch
    // matters: the PWA's start_url is /?source=pwa and assets are requested
    // as ?v=BUILD; without it those requests missed the cache and mixed
    // network HTML with cached JS.
    event.respondWith(
      caches.match(request, { ignoreSearch: true }).then((cached) => cached || fetch(request))
    );
  }
  // Everything else (product photos, external links, API calls once a real
  // backend exists): let the browser handle it normally, network-first.
});

// ── Push notifications ──
// The send side (edge function + DB triggers) already exists in Supabase;
// this is just the receiving end. A malformed or missing payload still
// shows a generic notification rather than silently doing nothing.
self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) {}
  const title = data.title || 'MiCampeche';
  const body = data.body || '';
  const url = data.url || '/';
  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: '/assets/icons/MiCampeche-app-icon.png',
      badge: '/assets/icons/notification-badge.png',
      data: { url }
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
