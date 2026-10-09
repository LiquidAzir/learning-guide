/* Learning Guide service worker.
   The app is one HTML file plus icons and web fonts, so offline support is small:
   - precache the shell on install;
   - fetch current pages online, falling back to the saved copy offline;
   - cache Google Fonts responses on first use so typography survives offline too.
   __BUILD__ is replaced by build.js with a build stamp so each deploy gets a fresh cache. */
const VERSION = '__BUILD__';
const SHELL_CACHE = 'lg-shell-' + VERSION;
const FONT_CACHE = 'lg-fonts-v1';
const SHELL = ['/', '/index.html', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/icon-512-maskable.png', '/icons/apple-touch-icon.png', '/favicon.svg'];

// Some static hosts redirect /index.html to /. Navigation requests can reject a
// redirected response returned by a worker, even when its final body is valid.
const navigationResponse = (res) => res && res.redirected
  ? new Response(res.body, { status: res.status, statusText: res.statusText, headers: res.headers })
  : res;

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(SHELL_CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k.startsWith('lg-shell-') && k !== SHELL_CACHE).map((k) => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Web fonts: cache-first, filled on first use (opaque cross-origin responses are fine to store).
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(FONT_CACHE).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        try { const res = await fetch(req); if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; }
        catch (e) { return hit || Response.error(); }
      })
    );
    return;
  }

  if (url.origin !== self.location.origin) return;
  // The glasses reader has its own small document and loads chapters on demand.
  // Never substitute the multi-megabyte regular guide for a glasses navigation.
  if (url.pathname === '/glasses' || url.pathname.startsWith('/glasses/')) return;

  // Online visits must show the latest feed, not yesterday's cached document.
  // A short timeout preserves usability on an unavailable network.
  const isNav = req.mode === 'navigate';
  const key = isNav ? '/index.html' : url.pathname;
  event.respondWith(
    caches.open(SHELL_CACHE).then(async (cache) => {
      const cached = await cache.match(key);
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 4000);
      try {
        const res = await fetch(isNav ? '/index.html' : req, { cache: 'no-cache', signal: controller.signal });
        if (res.ok) {
          try { await cache.put(key, res.clone()); } catch {}
          return isNav ? navigationResponse(res) : res;
        }
        if (!cached) return res;
      } catch {
        // Use the last successfully fetched document when offline.
      } finally {
        clearTimeout(timer);
      }
      const fallback = cached || Response.error();
      return isNav ? navigationResponse(fallback) : fallback;
    })
  );
});
