import React from 'react'
import { Link } from 'react-router-dom'
import { Dogshirts } from '../Data/Dshirts'

function ViewDshirts() {
    const sliceshirts=Dogshirts.slice(0,3)
  return (
    <div className='container'>
        {
            sliceshirts.map((e)=>{
                return(
                    
                      <div className='a1'>
                        <Link to={`/ViewDshirts/${e.id}`}>
                        <img src={e.image} alt=""/>
                        </Link>
                        <p>{e.id}</p>
                        <p>{e.Title}</p>
                        
                        
                      </div>
                    


                    
            )
        })
       }
       <Link to='/viewallDshirts'><div className='b'>View all</div></Link>
    </div>
  )
}

export default ViewDshirts