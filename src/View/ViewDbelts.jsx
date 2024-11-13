import React from 'react'
import { Link } from 'react-router-dom'
import { Dogsbelts} from '../Data/Dbelts'

function ViewDbelts() {
    const slicebelts=Dogsbelts.slice(0,3)
  return (
    
    <div className='container'>
        {
           
            slicebelts.map((e)=>{
                return(
                 
                      
                      <div className='a1'>
                      <Link to={`/ViewDbelts/${e.id}`}>
                      <img src={e.image} alt=""/>
                      </Link>
                        <p>{e.id}</p>
                        <p>{e.Title}</p>
                        <p>{e.color}</p>
                        <p>{e.price}</p>
                        <div className='but'>
                        <button>Cart</button>
                        </div>
                      </div>
                     


                    
            )
        })
       }
       <Link to='/ViewallDbelts'><div className='b'>View all</div></Link>
    </div>
  )
}

export default ViewDbelts