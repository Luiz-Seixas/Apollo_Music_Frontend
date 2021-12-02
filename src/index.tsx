import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./contexts/AppContext";
import "./styles/global.css";

import App from "./App";

// AppProvider está em torno de app para que toda a aplicação tenha acesso ao que está dentro do contexto
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
