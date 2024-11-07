import React from 'react'
import { Dogtoys } from '../Data/Dtoys'
import { Link } from 'react-router-dom'

function ViewallDtoys() {
    const Dogstoys=Dogtoys
  return (
    <div className='container'>
        {
            Dogstoys.map((e)=>{
                return(
                  <Link to={`/ViewallDtoys/${e.id}`} key={e.id}> 
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


export default ViewallDtoys