// MiCampeche service worker — deliberately conservative.
// Only the app shell (HTML/CSS/JS) is cached for offline access; everything
// else (images, external links) goes straight to the network. This avoids
// silently serving stale content the way a cache-everything strategy would.
// Bump CACHE_NAME whenever app-shell files change so old caches get cleared.
const CACHE_NAME = 'micampeche-shell-v1';
const APP_SHELL = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/app.js',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
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
