/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateContext } from "./context/StateContext";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContext>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </StateContext>
  </React.StrictMode>
);
