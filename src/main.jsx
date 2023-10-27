import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/HomePage/Header/Header.jsx";
import Footer from "./components/HomePage/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Header /> */}
    <App />
    {/* <Footer /> */}
  </BrowserRouter>
);
