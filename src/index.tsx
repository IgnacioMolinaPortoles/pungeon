import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MetaMaskInpageProvider } from "@metamask/providers";
import "../src/assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf";
import Router from "./hocs/router/Router";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
