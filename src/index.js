import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as servisWorker from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
servisWorker.register();
reportWebVitals();
