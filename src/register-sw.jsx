import { isSupported } from "firebase/messaging";

const registerServiceWorker = async (path) => {
  // 지원하지 않는 브라우저라면 return;
  const FCMSupproted = await isSupported();

  const isBrowserSupport =
    "serviceWorker" in navigator &&
    "Notification" in window &&
    "PushManager" in window;
  if (!isBrowserSupport || !FCMSupproted) return;

  // 기존에 있던 서비스 워커 가져옴
  let registration = await navigator.serviceWorker.getRegistration();

  const oldScriptUrl = registration.active.scriptURL;

  // 서비스워커 등록이 되어있지 않다면 새로 등록
  if (!oldScriptUrl) {
    registration = await navigator.serviceWorker.register(path);
  } else {
    const oldScriptPath = new URL(oldScriptUrl).pathname;
    // 서비스 워커 업데이트가 일어나거나, 기존 서비스 워커가 없다면 새로 등록함
    if (!registration || oldScriptPath !== path) {
      registration = await navigator.serviceWorker.register(path);
    }
  }

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
};

export default registerServiceWorker;
