const registerServiceWorker = (path) => {
  // google fcm server public key
  // let appServerPublicKey =
  //   "BILIDgED3ZDHKUz6LdCA3kTUJpQmKhrevE82Wgw588OcfrnOhbddlOdCKjEghgEdGvvTdHF32zrGv3ey6BU2N8s";

  function urlB64ToUnit8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
  }

  // subscribe
  function subscribe(serviceWorkerRegistration) {
    // const applicationServerKey = urlB64ToUnit8Array(appServerPublicKey);

    serviceWorkerRegistration.pushManager
      .subscribe({
        userVisibleOnly: true
        // applicationServerKey: applicationServerKey
      })
      .then((subscription) => {
        console.log("새로운 구독", subscription);
        // document.querySelector("#registerInfo").innerText =
        //   JSON.stringify(subscription);
      })
      .catch((err) => {
        console.log("Failed to subscribe the user: ", err);
      });
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(path).then((regist) => {
      // 이미 subscribe가 되어있는 상태면은 추가 subscribe x -> 기존 구독 정보 사용
      // regist.pushManager.getSubscription().then((subscription) => {
      //   if (subscription) {
      //     //   document.querySelector('#registerInfo').innerText =
      //     //     '기존 정보사용 : ' + JSON.stringify(subscription);
      //     console.log(subscription);
      //   } else {
      //     // 구독 정보가 없다면 새로운 구독 정보 생성
      //     subscribe(regist);
      //   }
      // });

      // 알림 권한 설정 허용 여부 확인
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("Notification permission is granted");
        } else {
          console.log("Notification permission is denied");
        }
      });

      regist.addEventListener("updatefound", () => {
        const newWorker = regist.installing;
        console.log("Service Worker update found!");

        newWorker.addEventListener("statechange", function () {
          console.log("Service Worker state changed:", this.state);
        });
      });
    });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      console.log("Controller changed");
    });
  }
};

export default registerServiceWorker;
