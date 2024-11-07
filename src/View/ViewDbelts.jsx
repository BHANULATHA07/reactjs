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
                    <Link to={`/ViewDbelts/${e.id}`}>
                      
                      <div className='a1'>
                      <img src={e.image} alt=""/>
                        <p>{e.id}</p>
                        <p>{e.Title}</p>
                        <p>{e.color}</p>
                        <p>{e.price}</p>
                      </div>
                    </Link>   


                    
            )
        })
       }
       <Link to='/ViewallDbelts'><div className='b'>View all</div></Link>
    </div>
  )
}

export default ViewDbelts