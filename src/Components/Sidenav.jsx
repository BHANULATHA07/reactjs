import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="nav1">
      <div className="nav2">
        <div style={{marginTop:'40px'}}>
          <h4>DASHBOARD</h4>
          <li>DOGS</li>
          <Link to="/Dashboard">
            <li>Home</li>
          </Link>
          <Link to="/ViewallDtoys">
            <li>Toys</li>
          </Link>
          <Link to="/ViewallDshirts">
            <li>shirts</li>
          </Link>
          <Link to="/ViewallDbelts">
            <li>Belts</li>
          </Link>
          
        </div>
        <div style={{marginTop:'73vh'}}>
          <Link to="/">
            <li>Logout</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
