import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal";
import registerServiceWorker from "./register-sw.jsx";
import "./index.scss";

Modal.setAppElement("#root");

// 서비스워커
registerServiceWorker(`/service-worker.js`);

const rootElement = document.getElementById("root");
rootElement.classList.add("p-safe-top");

ReactDOM.createRoot(rootElement).render(<App />);
