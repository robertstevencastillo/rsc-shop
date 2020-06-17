import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Footer from "./Footer.js";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render([<App key="1" />, <Footer key="2" />], rootElement);
