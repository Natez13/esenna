
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
import TeacherDashboard from './Components/teacherDashboard.js';
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from './Components/LoginButton.js'
import LogoutButton from "./Components/LogoutButton.js";
import Profile from "./Components/Profile.js";
*/
import { Home } from './Componets/Home';
import { User } from './Componets/User';



function App() {
  return (
    <div>
      <Router>
        <Route exact path="/user" component={User}/>
        <Route exact path="/" render={() => {
          return(
            <div>
              <Home></Home>
            </div>
          )
        }}/>
        <Route exact path="/logout" render={() => {
          return(
            <div>
              <h1>Funciono el logout</h1>
            </div>
          )
        }}/>
      </Router>
      
      
    </div>
  );
}

export default App;
