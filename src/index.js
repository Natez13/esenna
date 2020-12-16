import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Auth0Provider
    domain="dev--c34vvj2.us.auth0.com"
    clientId="OMNaaovP9h0neMiPFFUpux30PYDQIi1k"
    redirectUri={"http://localhost:3000/user"}
    audience="https://dev--c34vvj2.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

