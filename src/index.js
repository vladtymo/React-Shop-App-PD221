import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { AccountsProvider } from './contexts/account.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AccountsProvider>
        <App />
      </AccountsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
