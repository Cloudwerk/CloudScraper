import React from 'react';
import ReactDOM from 'react-dom/client';
import { CloudScraperApp } from './App/CloudScraperApp.tsx';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import './style.css';
import { initializeIcons } from '@fluentui/react';

const msalInstance = new PublicClientApplication(msalConfig);
initializeIcons();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
        <CloudScraperApp />
    </MsalProvider>
  </React.StrictMode>
);

