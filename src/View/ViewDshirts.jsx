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
                    <Link to={`/ViewDshirts/${e.id}`}>
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
       <Link to='/viewallDshirts'><div className='b'>View all</div></Link>
    </div>
  )
}

export default ViewDshirts