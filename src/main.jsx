import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal";
import registerServiceWorker from "./register-sw.jsx";
// import "./firebase-messaging-sw.js";

Modal.setAppElement("#root");

// 서비스워커
registerServiceWorker(`./firebase-messaging-sw.js`);

const rootElement = document.getElementById("root");

function setFullHeight() {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
  // mobile height setting
  document.documentElement.style.setProperty(
    "--app-height",
    `${window.innerHeight}px`
  );
  document.documentElement.style.setProperty(
    "--app-width",
    `${window.innerWidth}px`
  );
}

window.addEventListener("resize", setFullHeight);
window.addEventListener("load", setFullHeight);

ReactDOM.createRoot(rootElement).render(<App />);
