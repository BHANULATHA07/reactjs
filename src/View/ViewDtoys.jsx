import React from 'react'
import { Dogtoys } from '../Data/Dtoys'
import { Link } from 'react-router-dom'

function ViewDtoys() {
    const slicetoys=Dogtoys.slice(0,3)
  return (
    <div className='container' style={{display:'flex',flexwrap:'wrap',gap:'2%'}}>
        {
            slicetoys.map((e)=>{
                return(
                    <Link to={`/ViewDtoys/${e.id}`}>
                      
                      <div className='a1'>
                      <img src={e.image} alt="" />
                        <p>{e.id}</p>
                        <p>{e.Title}</p>
                        <p>{e.color}</p>
                        <p>{e.price}</p>
                      
                      </div>
                    </Link>
                       


                    
            )
        })
       }
       <Link to='/viewallDtoys'><div className='b'>View all</div></Link>
    </div>
  )
}


export default ViewDtoys