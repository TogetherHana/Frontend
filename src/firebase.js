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

export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
    });
    if (currentToken) {
      console.log("current token for client: ", currentToken);
    } else {
      console.log("Noregistration token available. Request permission");
    }
    return currentToken;
  } catch (err) {
    console.log("An error occurred while retrieving token. ", err);
  }
};
