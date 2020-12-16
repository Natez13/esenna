
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function SalesToday() {
    const [rowItems, setRowItems] = useState([
        { name: "Basics of Html", num: 15 },
        { name: "Angular in Steps", num: 50 },
        { name: "Bootstrap", num: 14 },
        { name: "Task Four", num: 14 }
    ]);
    return (

        <div className="bg-warning card">
            {rowItems.map(row =>(
                <div className="d-flex bg-danger">
                    <div>{row.name}</div>
                    <div>{row.num}</div>
                </div>
            ))}
        </div>
    )
}
/**
 *         <div class="card">
            <div class="card-header d-flex align-items-center">
                <div class="flex">
                    <h4 class="card-title">Earnings</h4>
                    <p class="card-subtitle">Last 7 Days</p>
                </div>
                <a href="instructor-earnings.html" class="btn btn-sm btn-primary"><i class="material-icons">trending_up</i></a>
            </div>
            <div class="card-body">
                <div class="chart" style="height: 200px;">
                    <canvas id="earningsChart" class="chart-canvas"></canvas>
                </div>
            </div>
        </div>
 */
export default SalesToday
