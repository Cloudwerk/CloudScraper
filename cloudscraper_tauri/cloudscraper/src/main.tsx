import { initializeIcons } from "@fluentui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

initializeIcons();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <a href="https://cloudscraper.z6.web.core.windows.net/" />
  </React.StrictMode>
);
