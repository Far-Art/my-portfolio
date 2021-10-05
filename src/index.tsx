import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Styles/GlobalStyles.css";
import Layout from "./Components/LayoutArea/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
