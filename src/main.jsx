
import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <App /> {/* This will render the App component inside the div with id "app" */}
  </React.StrictMode>
);
