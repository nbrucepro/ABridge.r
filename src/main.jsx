import React from "react";
import { Provider } from 'react-redux'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import i18n from "./i18n.config.js";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>  
    </I18nextProvider>
  </React.StrictMode>
);
