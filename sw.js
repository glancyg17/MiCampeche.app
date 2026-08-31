// MiCampeche service worker — deliberately conservative.
// Only the app shell (HTML/CSS/JS) is cached for offline access; everything
// else (images, external links, Supabase API calls) goes straight to the
// network. This avoids silently serving stale content the way a
// cache-everything strategy would.
// Bump CACHE_NAME whenever app-shell files change so old caches get cleared.
const CACHE_NAME = 'micampeche-shell-v36';
const APP_SHELL = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/vendor/supabase.js',
  '/js/supabase-client.js',
  '/js/app.js',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  // Deliberately NOT calling skipWaiting() here. A new worker installs and
  // then waits — it only activates once the page explicitly asks it to
  // (see the SKIP_WAITING message handler below), which happens when the
  // user taps the "update available" banner. This is what makes that
  // banner meaningful instead of cosmetic: without this, the new version
  // would silently take over in the background the moment it finished
  // installing, and the "tap to update" prompt would be a lie.
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isAppShell = APP_SHELL.some((path) => url.pathname === path || (path === '/' && url.pathname === '/index.html'));

  if (isAppShell) {
    // App shell: cache-first, so the basic UI loads offline.
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request))
    );
  }
  // Everything else (product photos, external links, API calls once a real
  // backend exists): let the browser handle it normally, network-first.
});
