// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

async function requestPermission() {
  const permission = await Notification.requestPermission();
  if (permission === "denied") {
    console.log("알림 권한 허용 안됨");
    return;
  }

  console.log("알림 권한 허용");

  const key = import.meta.env.VITE_VAPID_KEY;
  console.log(key);

  const token = await getToken(messaging, {
    vapidKey: key
  });

  if (token) console.log("token: ", token);
  else console.log("Cannot get Token");

  onMessage(messaging, (payload) => {
    console.log("메시지가 도착했습니다", payload);
  });
}

requestPermission();
