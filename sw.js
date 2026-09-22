// MiCampeche service worker — deliberately conservative.
// Only the app shell (HTML/CSS/JS) is cached for offline access; everything
// else (images, external links, Supabase API calls) goes straight to the
// network. This avoids silently serving stale content the way a
// cache-everything strategy would.
// Bump CACHE_NAME whenever app-shell files change so old caches get cleared.
const CACHE_NAME = 'micampeche-shell-v131';
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

self.addEventListener('install', (event) => {
  // Cache the new shell, then take over immediately — no "waiting" state.
  // The PAGE decides when to reload onto the new code (see the
  // controllerchange handling in index.html): silently while the app is
  // backgrounded, or at the next safe idle moment if it's in the
  // foreground. So updates land on their own without ever interrupting a
  // task, and there's nothing for anyone to tap.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
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
    // App shell: cache-first, so the basic UI loads offline.
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request))
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
