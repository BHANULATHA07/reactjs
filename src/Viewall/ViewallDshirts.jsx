import React from 'react'

import { Dogshirts } from '../Data/Dshirts'
import { Link } from 'react-router-dom'
function ViewallDshirts() {
    const Dogsshirts=Dogshirts
  return (
    <div className='container'>
      {
            Dogsshirts.map((e)=>{
                return(
                  <Link to={`/ViewallDshirts/${e.id}`} key={e.id}>
                      <div className='a1'>
                      <img src={e.image} alt="" />
                        <p>Id:{e.id}</p>
                        <p>Title:{e.Brand}</p>
                        <p>Color:{e.color}</p>
                        <p>Price:{e.price}</p>
                      </div>
                  </Link>     


                   
            )
        })
      }
      
    </div>
  )
}

export default ViewallDshirts