const version = 1;
const assetCacheName = `assets-${version}`;

self.addEventListener("install", function (e) {
  console.log("fcm sw install..");
  e.waitUntil(
    caches.open(assetCacheName).then((cache) => {
      // 캐시로 지정할 파일을 지정
      cache.addAll(["../index.html", "icons/favicon.ico", "../src/fonts"]);
    })
  );
  // 제어중인 서비스워커가 존재해도 대기 상태 건너 뜀
  self.skipWaiting();
});

// 기존에 있던 cache 삭제
self.addEventListener("activate", function (e) {
  console.log("fcm sw activate..");
  //   e.waitUntil(
  //     caches.keys().then((cacheNames) => {
  //       return Promise.all(
  //         cacheNames.map((cacheName) => {
  //           if (cacheName !== assetCacheName) {
  //             return caches.delete(cacheName);
  //           }
  //         })
  //       );
  //     })
  //   );
  //   // 활성화 즉시 클라이언트 제어
  //   self.clients.claim();
});

// 오프라인 상태라면, 캐시에 저장되어 있는 파일들 fetch로 받아옴
self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => result && result)
    );
  }
});

// TODO Messaging으로 바꾸기
self.addEventListener("push", function (e) {
  console.log("push: ", e.data.json());
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image,
    tag: resultData.tag,
    ...resultData
  };
  console.log("push: ", { resultData, notificationTitle, notificationOptions });

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  console.log("notification click");
  const url = "/";
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});
