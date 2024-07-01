// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Firebase version 9
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "together-hana.firebaseapp.com",
  projectId: "together-hana",
  storageBucket: "together-hana.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MSI,
  appId: import.meta.env.VITE_FIREBASE_AI
};

// Intialize Firebase
// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// Initialize Firebase v9
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
      } else {
        console.log("Noregistration token available. Request permission");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};
// export async function requestPermission() {
// Notification.requestPermission().then((permission) => {
//   if (permission === "granted") {
//     messaging
//       .getToken({ vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY })
//       .then((token) => {
//         console.log(`푸시 토큰 발급 완료 : ${token}}`);
//       })
//       .catch((err) => {
//         console.log("푸시 토큰 가져오는 중에 에러 발생");
//       });
//   } else if (permission === "denied") {
//     console.log("푸시 권한 차단");
//   }
// });
// const permission = await Notification.requestPermission();
// if (permission === "denied") {
//   console.log("알림 권한 허용 안됨");
//   return;
// }

// console.log("알림 권한 허용");

// const key = import.meta.env.VITE_VAPID_KEY;
// console.log(key);

// const token = await getToken(messaging, {
//   vapidKey: key
// });

// if (token) console.log("token: ", token);
// else console.log("Cannot get Token");

// onMessage(messaging, (payload) => {
//   console.log("메시지가 도착했습니다", payload);
// });
// }

// export default requestPermission;
