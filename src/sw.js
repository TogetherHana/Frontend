// import { toast } from "react-toastify";

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `../public/service-worker.js`;
      console.log("swUrl", swUrl);

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service " +
              "worker. To learn more, visit https://bit.ly/CRA-PWA"
          );
        });

        // // Then later, request a one-off sync:
        // navigator.serviceWorker.ready.then(function (swRegistration) {
        //     return swRegistration.sync.register('myFirstSync');
        // });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
      let refreshing = false;

      // detect controller change and refresh the page
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          // window.location.reload(true)
          refreshing = true;
        }
      });
    });
  }
}

// function invokeServiceWorkerUpdateFlow(registration) {
//     var pjson = require('../package.json');
//     console.log(pjson.version);
//     toast.info(`Application services improved ${pjson.version} `, {
//         toastId: "appUpdateAvailable", // Prevent duplicate toasts
//         onClick: () => {
//             if (registration.waiting) {
//                 // let waiting Service Worker know it should became active
//                 registration.waiting.postMessage('SKIP_WAITING')
//             }
//         }, // Closes windows on click
//         autoClose: false,// Prevents toast from auto closing
//         icon: <InfoIcon />
//     });

// }

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      // Check for updates at start.
      registration.update();
      // Check for updates every min.
      setInterval(() => {
        registration.update();
      }, 1000 * 60);

      // ensure the case when the updatefound event was missed is also handled
      // by re-invoking the prompt when there's a waiting Service Worker
      if (registration.waiting) {
        // invokeServiceWorkerUpdateFlow(registration)
      }

      // detect Service Worker update available and wait for it to become installed
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        // wait until the new Service worker is actually installed (ready to take over)
        installingWorker.onstatechange = () => {
          if (registration.waiting) {
            if (navigator.serviceWorker.controller) {
              // if there's an existing controller (previous Service Worker), show the prompt
              // invokeServiceWorkerUpdateFlow(registration)
              console.log(
                "New assets is available and will be used when all " +
                  "tabs for this page are closed. See https://bit.ly/CRA-PWA"
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Index is cached for offline use." message.
              console.log("Index is cached for offline use.");

              // Execute callback
              if (config && config.onSuccess) {
                console.log("if (config && config.onSuccess) {");
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { "Service-Worker": "script" }
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

// import { isSupported } from "firebase/messaging";
// // import requestPermission from "./firebase-messaging-sw";

// const registerServiceWorker = async (path) => {
//   // requestPermission();
//   // 지원하지 않는 브라우저라면 return;
//   const FCMSupproted = await isSupported();

//   const isBrowserSupport =
//     "serviceWorker" in navigator &&
//     "Notification" in window &&
//     "PushManager" in window;
//   if (!isBrowserSupport || !FCMSupproted) return;

//   // 기존에 있던 서비스 워커 가져옴
//   let registration = await navigator.serviceWorker.getRegistration();

//   const oldScriptUrl = registration.active.scriptURL;

//   // 서비스워커 등록이 되어있지 않다면 새로 등록
//   if (!oldScriptUrl) {
//     registration = await navigator.serviceWorker.register(path);
//   } else {
//     const oldScriptPath = new URL(oldScriptUrl).pathname;
//     // 서비스 워커 업데이트가 일어나거나, 기존 서비스 워커가 없다면 새로 등록함
//     if (!registration || oldScriptPath !== path) {
//       registration = await navigator.serviceWorker.register(path);
//     }
//   }

// // subscribe
// function subscribe(serviceWorkerRegistration) {
//   // const applicationServerKey = urlB64ToUnit8Array(appServerPublicKey);
//   serviceWorkerRegistration.pushManager
//     .subscribe({
//       userVisibleOnly: true
//       // applicationServerKey: applicationServerKey
//     })
//     .then((subscription) => {
//       console.log("새로운 구독", subscription);
//       // document.querySelector("#registerInfo").innerText =
//       //   JSON.stringify(subscription);
//     })
//     .catch((err) => {
//       console.log("Failed to subscribe the user: ", err);
//     });
// }
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register(path).then((regist) => {
//     // 이미 subscribe가 되어있는 상태면은 추가 subscribe x -> 기존 구독 정보 사용
//     // regist.pushManager.getSubscription().then((subscription) => {
//     //   if (subscription) {
//     //     //   document.querySelector('#registerInfo').innerText =
//     //     //     '기존 정보사용 : ' + JSON.stringify(subscription);
//     //     console.log(subscription);
//     //   } else {
//     //     // 구독 정보가 없다면 새로운 구독 정보 생성
//     //     subscribe(regist);
//     //   }
//     // });
//     // 알림 권한 설정 허용 여부 확인
//     Notification.requestPermission().then(function (permission) {
//       if (permission === "granted") {
//         console.log("Notification permission is granted");
//       } else {
//         console.log("Notification permission is denied");
//       }
//     });
//     regist.addEventListener("updatefound", () => {
//       const newWorker = regist.installing;
//       console.log("Service Worker update found!");
//       newWorker.addEventListener("statechange", function () {
//         console.log("Service Worker state changed:", this.state);
//       });
//     });
//   });
//   navigator.serviceWorker.addEventListener("controllerchange", () => {
//     console.log("Controller changed");
//   });
// }
// };

// export default registerServiceWorker;
