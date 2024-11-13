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
        <li>Logout</li>
        
      </ul>
    

    </div>
  );
}
       
<<<<<<< HEAD
export default Sidenav
=======
export default Sidenav
>>>>>>> f4cbf7ee50c5b5cb4271795ee916e76d9e57ff64
