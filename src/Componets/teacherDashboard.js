import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './teacherDashBoard.css';
import SalesToday from './SalesToday.js';
function teacherDashboard() {
    return (
        <div className="layout-fluid w-100 vh-100">
            <div className="container pt-4">
                <div className="d-flex">
                    <Link to="/"><div>Home</div></Link>
                    <div className="text-muted"> / Dashboard</div>
                </div>
                <h2 className="ltr">
                    Dashboard
                </h2>
                <SalesToday/>
            </div>
        </div>
    )
}

export default teacherDashboard
