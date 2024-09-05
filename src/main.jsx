import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client";
import * as React from "react";
import "slick-carousel/slick/slick.css";
import "./index.css";
import App from "./App.jsx"
import { ContextApi } from "./Components/ContextApi";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ContextApi>
      <App />
      </ContextApi>
  </React.StrictMode>
);
