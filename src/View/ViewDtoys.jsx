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
                    
                      
                      <div className='a1'>
                        <Link to={`/ViewDtoys/${e.id}`}>
                        <img src={e.image} alt="" />
                        </Link>
                        <p>{e.id}</p>
                        <p>{e.Title}</p>
                        
                        
                      </div>
                    
                       


                    
            )
        })
       }
       <Link to='/viewallDtoys'><div className='b'>View all</div></Link>
    </div>
  )
}


export default ViewDtoys