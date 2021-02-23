// @ts-nocheck
import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./main.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const renderApp = () => {
  render(
    <React.StrictMode>
      <Provider store={store({})}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (process.env.NODE_ENV !== "production" && module.hot)
  module.hot.accept("./App", renderApp);

renderApp();
