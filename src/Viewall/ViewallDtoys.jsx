import React from 'react'
import { Dogtoys } from '../Data/Dtoys'
import { Link } from 'react-router-dom'
import Sidenav from '../Components/Sidenav'
import {Row,Col} from 'react-bootstrap'
import Header from '../Components/Header'
function ViewallDtoys() {
    const Dogstoys=Dogtoys
  return (
   <Row>
      <Col sm={2}>
        <Sidenav/>
      </Col>
      <Col sm={10}>
      <Header/>
      <div className='container'>
        {
            Dogstoys.map((e)=>{
                return(
                      <div className='top' style={{marginTop:'20px'}}>
                      <div className='a1'>
                        <Link to={`/ViewallDtoys/${e.id}`} key={e.id}> 
                        <img src={e.image} alt="" />
                        </Link> 
                        <p>Id:{e.id}</p>
                        <p>Title:{e.Brand}</p>
                        <p>Color:{e.color}</p>
                        <p>Price:{e.price}</p>
                      </div>  
                      </div>
                     


                   
            )
        })
       }
       
    </div>
      </Col>
    </Row>
  )
}


export default ViewallDtoys