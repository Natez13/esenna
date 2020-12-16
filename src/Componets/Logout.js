import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button  className="btn alert-dark" onClick={() => logout({ returnTo: 'http://localhost:3000' })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
