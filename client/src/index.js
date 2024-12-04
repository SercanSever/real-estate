import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvier } from "./context/auth-context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvier>
      <App />
    </AuthContextProvier>
  </React.StrictMode>
);

reportWebVitals();
