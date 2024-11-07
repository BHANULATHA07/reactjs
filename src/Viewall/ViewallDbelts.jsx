import React from 'react'
import { Dogsbelts} from '../Data/Dbelts'
import { Link } from 'react-router-dom'
function viewallDbelts() {
    const Dogbelts=Dogsbelts
  return (
    <div className='container'>
        {
            Dogbelts.map((e)=>{
                return(
                    <Link to={`/ViewallDbelts/${e.id}`} key={e.id}>
                      <div className='a1'>
                      <img src={e.image} alt="" />
                        <p>Id:{e.id}</p>
                        <p>Title:{e.Title}</p>
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

export default viewallDbelts