import React from 'react'
import { Dogsbelts} from '../Data/Dbelts'
import { Link } from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'
function viewallDbelts() {
    const Dogbelts=Dogsbelts
  return (
    <Row>
      <Col sm={2}>
        <Sidenav/>
      </Col>
      <Col sm={10}>
      <Header/>
      <div className='container'>
        {
            Dogbelts.map((e)=>{
                return(
                    
                      <div className='a1'>
                        <Link to={`/ViewallDbelts/${e.id}`} key={e.id}>
                        <img src={e.image} alt="" />
                        </Link>
                        <p>Id:{e.id}</p>
                        <p>Title:{e.Title}</p>
                        <p>Color:{e.color}</p>
                        <p>Price:{e.price}</p>
                        <div className='but'>
                        <button>Cart</button>
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

export default viewallDbelts