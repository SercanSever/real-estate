import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvier } from "./context/auth-context.js";
import { SocketContextProvier } from "./context/socket-context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvier>
      <SocketContextProvier>
        <App />
      </SocketContextProvier>
    </AuthContextProvier>
  </React.StrictMode>
);

reportWebVitals();
