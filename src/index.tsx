import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Styles/GlobalStyles.css";
import "./Styles/Fonts.css";
import Layout from "./Components/LayoutArea/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
