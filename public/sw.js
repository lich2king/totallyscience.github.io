// SERVICE WORKER HAS TO BE IN MAIN DIRECTORY
const OFFLINE_VERSION = 1;
const CACHE_NAME = "ts_cache";
const URLS_TO_CACHE = [
    //logo
    '/images/logo.png',
    //game images
    '/images/game_images/retrobowl.jpg',
    '/images/game_images/papaspizza.png',
    '/images/game_images/driftboss.jpeg',
    '/images/game_images/chess-icon.png',
    '/images/game_images/2048.png',
    '/images/game_images/college2048.png',
    '/images/game_images/connect4.jpeg',
    '/images/game_images/cupcake2048.png',
    '/images/game_images/ducklife.jpeg',
    '/images/game_images/ducklife2.jpeg',
    '/images/game_images/ducklife3.jpeg',
    '/images/game_images/ducklife4.jpeg',
    '/images/game_images/elasticman.jpeg',
    '/images/game_images/factoryballsforever.jpeg',
    '/images/game_images/Flappy_Bird_icon.png',
    '/images/game_images/fridaynightfunkin.png',
    '/images/game_images/Fnf.jpeg',
    '/images/game_images/galacticwars.png',
    '/images/game_images/geometrydash.png',
    '/images/game_images/jetpackjoyride.png',
    '/images/game_images/minigolf.jpeg',
    '/images/game_images/orcsvselves.jpeg',
    '/images/game_images/papermc.jpeg',
    '/images/game_images/pool.jpeg',
    '/images/game_images/rollingvortex.jpeg',
    '/images/game_images/sims.jpeg',
    '/images/game_images/slope.png',
    '/images/game_images/soccer.jpeg',
    '/images/game_images/streetfighter.png',
    '/images/game_images/solitaire.png',
    '/images/game_images/tanukisunset.jpeg',
    '/images/game_images/stack.jpeg',
    '/images/game_images/tetris.png',
    '/images/game_images/uno.jpeg',
    '/images/game_images/whg.jpeg',
    '/images/game_images/the-impossible-quiz.jpg',
    '/images/game_images/gunmayhem.jpeg',
    '/images/game_images/escapingtheprison.jpeg',
    '/images/game_images/krunker.png',
    '/images/game_images/breakingthebank.jpeg',
    '/images/game_images/stealdiamond.jpeg',
    '/images/game_images/infiltratingairship.jpeg',
    '/images/game_images/fleeingcomplex.jpg',
    '/images/game_images/appelplatformer.png',
    '/images/game_images/paperio.jpeg',
    '/images/game_images/run3.jpeg',
    '/images/game_images/snake.png',
    '/images/game_images/minecraft.png',
    '/images/game_images/golfblast.jpeg',
    '/images/game_images/happywheels.png',
    '/images/game_images/amongus.jpg',
    '/images/game_images/impquiz2.jpeg',
    '/images/game_images/fnafworld.jpg',
    '/images/game_images/fnaf3.png',
    '/images/game_images/gettingoverit.jpeg',
    '/images/game_images/drifthunters.png',
    '/images/game_images/cubefield.jpg',
    '/images/game_images/dealornodeal.jpg',
    '/images/game_images/webswinger.jpg',
    '/images/game_images/sniper.jpg',
    '/images/game_images/stormthehouse2.jpg',
    '/images/game_images/pingpong.jpg',
    '/images/game_images/tunnelrush.jpg',
    '/images/game_images/squidgames.png',
    '/images/game_images/ballblast.png',
    '/images/game_images/carparkingchaos.png',
    '/images/game_images/bubblepopper.png',
    '/images/game_images/happyroom.png',
    '/images/game_images/parkingfury3d.jpeg',
    '/images/game_images/fnaf1.png',
    '/images/game_images/motox3m.jpeg',
    '/images/game_images/basketballstars.png',
    '/images/game_images/1v1.jpg',
    '/images/game_images/fallguys.png',
    '/images/game_images/rooftopsnipers.jpeg',
    '/images/game_images/stuntcars2.png',
    '/images/game_images/sansfight.jpg',
    '/images/game_images/fnaf4.jpeg',
    '/images/game_images/pokemonfirered.png',
    '/images/game_images/pokemonleafgreen.jpg',
    '/images/game_images/kirbymirror.jpg',
    '/images/game_images/supermariobros3.jpg',
    '/images/game_images/clashroyale.jpg',
    '/images/game_images/minercat.png',
    '/images/game_images/csgosurf.jpeg',
    '/images/game_images/dogeminer.jpg',
    '/images/game_images/stackbump.png',
    '/images/game_images/wordle.png',
    '/images/game_images/rocketleague.jpeg',
    '/images/game_images/getawayshootout.jpg',
    '/images/game_images/crossyroad.jpg',
    '/images/game_images/subwaysurfers.jpeg',
    '/images/game_images/cookieclicker.jpeg',
    '/images/game_images/vex5.jpg',
    '/images/game_images/sisterloco.jpg',
    '/images/game_images/vex4.jpg',
    '/images/game_images/vex3.jpeg',
    '/images/game_images/fireboyandwatergirl.jpeg',
    '/images/game_images/hexgl.jpg',
    '/images/game_images/minigolfonline.png',
    '/images/game_images/cattrap.jpg',
    '/images/game_images/zombs-royale.jpg',
    '/images/game_images/bloonstd4.jpg'
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
  if (e.request.url.startsWith('https://pagead')) return;

  e.respondWith((async () => {
    const r = await caches.match(e.request);
    if (r) { return r; }
    const response = await fetch(e.request);
    return response;
  })());
});