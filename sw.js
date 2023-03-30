// SERVICE WORKER HAS TO BE IN MAIN DIRECTORY
const OFFLINE_VERSION = 3;
const CACHE_NAME = "ts_cache";
const URLS_TO_CACHE = [
    // logo
    '/assets/images/totally-science-logo-transparent-scaled.png',
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      await fetch(`assets/games.json?date=${new Date().getTime()}`).then((response) => response.json()).then((retrievedGames) => {
        for (game in retrievedGames) {
          URLS_TO_CACHE.push(retrievedGames[game].image.slice(1));
        }
      });

      const cache = await caches.open(CACHE_NAME + '_v' + OFFLINE_VERSION);
      // Setting {cache: 'reload'} in the new request will ensure that the
      // response isn't fulfilled from the HTTP cache; i.e., it will be from
      // the network.
      await cache.addAll(URLS_TO_CACHE);
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }

      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (CACHE_NAME + '_v' + OFFLINE_VERSION !== cacheName && cacheName.startsWith('ts_cache')) {
                console.log('SW: updated cache version');
                return caches.delete(cacheName);
            }
          })
        );
      })
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.startsWith('https://pagead')) return;
  if (e.request.url.startsWith('https://www.googletag')) return;
  if (e.request.url.startsWith('https://static.cloudflare')) return;
  if (e.request.url.startsWith('https://www.google-analytics.com')) return;

  e.respondWith((async () => {
    const r = await caches.match(e.request);
    if (r) { return r; }
    const response = await fetch(e.request);
    return response;
  })());
});