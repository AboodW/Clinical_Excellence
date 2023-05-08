/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateContext } from "./context/StateContext";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Layout from "./Layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContext>
      <BrowserRouter>
        <Layout>
          <Toaster />
          <App />
        </Layout>
      </BrowserRouter>
    </StateContext>
  </React.StrictMode>
);
