'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1661205d6c4bcad959cc2dce0a5d972e",
"version.json": "b3cd83bc5aaa064ca82f5d5b3a36262d",
"index.html": "7ed8e5d8bed3eb534e7d2f38aa93c950",
"/": "7ed8e5d8bed3eb534e7d2f38aa93c950",
"main.dart.js": "5f640ae778d2e1ab667407ef2e3260eb",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f89db0e5b32c2d4a47e8e780392c834f",
"assets/AssetManifest.json": "fe5e5ad680dbd9a8d2e1f2a6c810f0fd",
"assets/NOTICES": "105318d1863ccc24c02e34cd9a5424f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4dc415bfa189ca898d224fa88332eb3d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "481ccb579a59d2829f7ceadd6d0ab5b8",
"assets/fonts/MaterialIcons-Regular.otf": "cc0c44d604185a55c0035f869247928b",
"assets/assets/icons/default_avatar.jpg": "cf77daf0f8c49efce0e1b856eb5b443b",
"assets/assets/icons/info.png": "3bb365cbf746bc58f684cb1726dc2b96",
"assets/assets/icons/vous_etes.png": "85e9128526732f191576a90ffb1d2ba4",
"assets/assets/icons/entrepreneurBg.png": "3e0c8f5c2d4348b39e9bcdea1d84d352",
"assets/assets/icons/i_blue.png": "4f642fa88264232c8ea9396ffbb57bb7",
"assets/assets/icons/big_b%25202.png": "031435ca3e87305833f5ba242d735606",
"assets/assets/icons/i.png": "d56290e2f9654f6380836c9c663e8da8",
"assets/assets/icons/close_circle.png": "48b3fa1600a1cabdd6624bfd956aef58",
"assets/assets/icons/google_icon.png": "2a962384b5fbf4d013651e2073875cbc",
"assets/assets/icons/Logo%25202.png": "49a8fae68779bdb15814d8c77822ea97",
"assets/assets/icons/big_b.png": "031435ca3e87305833f5ba242d735606",
"assets/assets/icons/location1.png": "6de46d74181b888cf355702211f13408",
"assets/assets/icons/entreprisBg.png": "081ba4ea7a20c0c8eeae0b321e1326d5",
"assets/assets/icons/settings.svg": "8f4dac1f26f6032dc2ba89342851d454",
"assets/assets/icons/button_bg.png": "f1b5843710c17a51b9f83b6be77c646e",
"assets/assets/icons/bulle.png": "413c20e582b8582903abe23b29106ada",
"assets/assets/icons/user.png": "94f6081f6d84105a721f4d81d2e2c8d9",
"assets/assets/icons/users.png": "1b7d47090c36e14d13432c75aac31e52",
"assets/assets/icons/man.png": "2102543de3b2462181f15e84e62d5a3e",
"assets/assets/icons/splash.png": "50e571ca716f86814de0a7b025bf60c6",
"assets/assets/icons/bravo_brian.png": "2520bc1e743c8c16c0205c567e9c70be",
"assets/assets/icons/Logo.png": "49a8fae68779bdb15814d8c77822ea97",
"assets/assets/icons/i_amber.png": "3e50c331a078f95390cbae59801966a6",
"assets/assets/icons/cest_partie.png": "e785e7992bfb7a9210a0e34059539118",
"assets/assets/icons/location.png": "b9cd8359fa92349980781d20a8b61a75",
"assets/assets/icons/entrepreneur.svg": "befc41ef67f3e8eeb38b5c5cfc4325b3",
"assets/assets/icons/button_bg_min.png": "374bf06e82c71c69120072998c86a8fd",
"assets/assets/icons/edit.png": "7dbf264546150a62dd823269f716199b",
"assets/assets/icons/fusion.png": "2cf1f1de9cfb51a375b1d94faabf42c3",
"assets/assets/icons/wait_time.png": "cfb6baca7558198aaa0737d41a10fbc3",
"assets/assets/icons/cadre.png": "aae17670ab1b3d743ec2fb82630daf46",
"assets/assets/icons/business.svg": "6d6f3552433326a57a8a3f1d71a48e34",
"assets/assets/icons/company.svg": "a48822674009602c54661dcf46a1d9ee",
"assets/assets/icons/message.png": "5e13c0a3e976309719ed983bb6c9b224",
"assets/assets/icons/button_bg_right.png": "56340dd45bf990093936eb2da33817b9",
"assets/assets/icons/suports.svg": "a28ef172c89675889953231256aa9a27",
"assets/assets/icons/layout.svg": "cff8a982d03d4b2ef3152a3c428bb990",
"assets/assets/icons/valid_circle.png": "6ffdd7f0ff92c76ef4cc091e520197bc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
