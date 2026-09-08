/* Learning Guide service worker.
   The app is one HTML file plus icons and web fonts, so offline support is small:
   - precache the shell on install;
   - serve the shell from cache, then refresh it in the background (stale-while-revalidate),
     so a new deploy shows up on the next open without ever blocking a load;
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

  // Navigations and the shell: stale-while-revalidate. Any path serves index.html (hash routing).
  const isNav = req.mode === 'navigate';
  const key = isNav ? '/index.html' : url.pathname;
  event.respondWith(
    caches.open(SHELL_CACHE).then(async (cache) => {
      const cached = await cache.match(key);
      const network = fetch(isNav ? '/index.html' : req).then((res) => {
        if (res && res.ok) cache.put(key, res.clone());
        return res;
      }).catch(() => null);
      if (cached) { network.catch(() => {}); return isNav ? navigationResponse(cached) : cached; }
      const res = await network;
      const fallback = res || (isNav ? (await cache.match('/index.html')) : Response.error());
      return isNav ? navigationResponse(fallback) : fallback;
    })
  );
});
