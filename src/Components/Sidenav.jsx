import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div className='nav'>       
      <h4>Dashboard</h4>   
      <ul>
        <li>DOGS</li>
        <Link to ='/ViewallDtoys'><li>Toys</li></Link>
        <Link to ='/ViewallDshirts'><li>shirts</li></Link>
        <Link to ='/ViewallDbelts'><li>Belts</li></Link>
        <Link to='/Login'><li>Logout</li></Link>
        
      </ul>
    

    </div>
  );
}
       

export default Sidenav
