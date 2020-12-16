import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherDashboard from './Components/teacherDashboard.js';
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from './Components/LoginButton.js'
import LogoutButton from "./Components/LogoutButton.js";
import Profile from "./Components/Profile.js";

function App() {


  return (

    <Router>
      <Route exact path="/" render={() => 
      
        <div>
          <Link to="/teacher" className="btn btn-log btn-primary">Teacher </Link>
          <Link to="/login" className="btn btn-log btn-primary">Log In </Link>
          <LoginButton/>
        </div>
      
      }>
        
      </Route>
      <Route exact path="/teacher" render={() => 
      
        <div>
          <TeacherDashboard/>
        </div>
      
      }/>

      <Route exact path="/login" render={() => 
        
        <div>

          <LoginButton/>
        </div>
      
      }/>

      <Route exact path="/profile" render={() => 
        
        <Profile/>
      
      }/>
    </Router>
  );
}

export default App;
