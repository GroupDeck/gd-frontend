import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { DiscContextProvider } from "./store/disc-context";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <DiscContextProvider>
        <App />
      </DiscContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
