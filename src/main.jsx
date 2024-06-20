import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal";
import registerServiceWorker from "./register-sw.jsx";

Modal.setAppElement("#root");

registerServiceWorker(`/service-worker.js`);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
