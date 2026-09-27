import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PortfolioManager from "./PortfolioManager";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PortfolioManager />
  </React.StrictMode>
);
