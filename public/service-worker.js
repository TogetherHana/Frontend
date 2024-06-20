// service-worker.js
const CACHE_NAME = "version-1";
const urlsToCache = ["../index.html", "icons/favicon.ico"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  // update
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", function (event) {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("push", (event) => {
  console.log(event);
  const title = "공지사항";
  const options = {
    body: event.data.text()
  };
  console.log(options);
  event.waitUntil(self.registration.showNotification(title, options));
});
