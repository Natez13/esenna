import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn alert-dark" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
