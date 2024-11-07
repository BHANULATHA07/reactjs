import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Sidenav() {
  return (
    <div className='nav'>       
        <ul>
        <li>Dogs</li>
        <li>Cats</li>
        <Link to ='/Dashboad'><li>Logout</li></Link>
        </ul>

    </div>
  )
}

export default Sidenav