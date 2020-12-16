import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Auth0Provider
    domain="dev-1t1t3mdl.us.auth0.com"
    clientId="q64uMsJbPgPHyq8KZXbZWM0bMixO3n2x"
    redirectUri={'http://localhost:57542/user'}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
