// SERVICE WORKER HAS TO BE IN MAIN DIRECTORY
const OFFLINE_VERSION = 1;
const CACHE_NAME = "ts_cache";
const URLS_TO_CACHE = [
    '/assets/game_images/retrobowl.jpg',
    '/assets/game_images/papaspizza.png',
    '/assets/game_images/driftboss.jpeg',
    '/assets/game_images/chess-icon.png',
    '/assets/game_images/2048.png',
    '/assets/game_images/college2048.png',
    '/assets/game_images/connect4.jpeg',
    '/assets/game_images/cupcake2048.png',
    '/assets/game_images/ducklife.jpeg',
    '/assets/game_images/ducklife2.jpeg',
    '/assets/game_images/ducklife3.jpeg',
    '/assets/game_images/ducklife4.jpeg',
    '/assets/game_images/elasticman.jpeg',
    '/assets/game_images/factoryballsforever.jpeg',
    '/assets/game_images/Flappy_Bird_icon.png',
    '/assets/game_images/fridaynightfunkin.png',
    '/assets/game_images/Fnf.jpeg',
    '/assets/game_images/galacticwars.png',
    '/assets/game_images/geometrydash.png',
    '/assets/game_images/jetpackjoyride.png',
    '/assets/game_images/minigolf.jpeg',
    '/assets/game_images/orcsvselves.jpeg',
    '/assets/game_images/papermc.jpeg',
    '/assets/game_images/pool.jpeg',
    '/assets/game_images/rollingvortex.jpeg',
    '/assets/game_images/sims.jpeg',
    '/assets/game_images/slope.png',
    '/assets/game_images/soccer.jpeg',
    '/assets/game_images/streetfighter.png',
    '/assets/game_images/solitaire.png',
    '/assets/game_images/tanukisunset.jpeg',
    '/assets/game_images/stack.jpeg',
    '/assets/game_images/tetris.png',
    '/assets/game_images/uno.jpeg',
    '/assets/game_images/whg.jpeg',
    '/assets/game_images/the-impossible-quiz.jpg',
    '/assets/game_images/gunmayhem.jpeg',
    '/assets/game_images/escapingtheprison.jpeg',
    '/assets/game_images/krunker.png',
    '/assets/game_images/breakingthebank.jpeg',
    '/assets/game_images/stealdiamond.jpeg',
    '/assets/game_images/infiltratingairship.jpeg',
    '/assets/game_images/fleeingcomplex.jpg',
    '/assets/game_images/appelplatformer.png',
    '/assets/game_images/paperio.jpeg',
    '/assets/game_images/run3.jpeg',
    '/assets/game_images/snake.png',
    '/assets/game_images/minecraft.png',
    '/assets/game_images/golfblast.jpeg',
    '/assets/game_images/happywheels.png',
    '/assets/game_images/amongus.jpg',
    '/assets/game_images/impquiz2.jpeg',
    '/assets/game_images/fnafworld.jpg',
    '/assets/game_images/fnaf3.png',
    '/assets/game_images/gettingoverit.jpeg',
    '/assets/game_images/drifthunters.png',
    '/assets/game_images/cubefield.jpg',
    '/assets/game_images/dealornodeal.jpg',
    '/assets/game_images/webswinger.jpg',
    '/assets/game_images/sniper.jpg',
    '/assets/game_images/stormthehouse2.jpg',
    '/assets/game_images/pingpong.jpg',
    '/assets/game_images/tunnelrush.jpg',
    '/assets/game_images/squidgames.png',
    '/assets/game_images/ballblast.png',
    '/assets/game_images/carparkingchaos.png',
    '/assets/game_images/bubblepopper.png',
    '/assets/game_images/happyroom.png',
    '/assets/game_images/parkingfury3d.jpeg',
    '/assets/game_images/fnaf1.png',
    '/assets/game_images/motox3m.jpeg',
    '/assets/game_images/basketballstars.png',
    '/assets/game_images/1v1.jpg',
    '/assets/game_images/fallguys.png',
    '/assets/game_images/rooftopsnipers.jpeg',
    '/assets/game_images/stuntcars2.png',
    '/assets/game_images/sansfight.jpg',
    '/assets/game_images/fnaf4.jpeg',
    '/assets/game_images/pokemonfirered.png',
    '/assets/game_images/pokemonleafgreen.jpg',
    '/assets/game_images/kirbymirror.jpg',
    '/assets/game_images/supermariobros3.jpg',
    '/assets/game_images/clashroyale.jpg',
    '/assets/game_images/minercat.png',
    '/assets/game_images/csgosurf.jpeg',
    '/assets/game_images/dogeminer.jpg',
    '/assets/game_images/stackbump.png',
    '/assets/game_images/wordle.png',
    '/assets/game_images/rocketleague.jpeg',
    '/assets/game_images/getawayshootout.jpg',
    '/assets/game_images/crossyroad.jpg',
    '/assets/game_images/subwaysurfers.jpeg',
    '/assets/game_images/cookieclicker.jpeg',
    '/assets/game_images/vex5.jpg',
    '/assets/game_images/sisterloco.jpg',
    '/assets/game_images/vex4.jpg',
    '/assets/game_images/vex3.jpeg',
    '/assets/game_images/fireboyandwatergirl.jpeg',
    '/assets/game_images/hexgl.jpg',
    '/assets/game_images/minigolfonline.png',
    '/assets/game_images/cattrap.jpg',
    '/assets/game_images/zombs-royale.jpg',
    '/assets/game_images/bloonstd4.jpg'
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
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
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    if (r) { return r; }
    const response = await fetch(e.request);
    return response;
  })());
});