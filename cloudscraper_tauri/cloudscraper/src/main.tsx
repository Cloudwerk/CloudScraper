import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { initializeIcons } from "@fluentui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { CloudScraperApp } from "./App/CloudScraperApp";
import { msalConfig } from "./authConfig";
import "./style.css";

const msalInstance = new PublicClientApplication(msalConfig);
initializeIcons();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <CloudScraperApp />
    </MsalProvider>
  </React.StrictMode>
);
