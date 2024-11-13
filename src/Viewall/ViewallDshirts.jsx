import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Dogshirts } from '../Data/Dshirts'
import { Link } from 'react-router-dom'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'
function ViewallDshirts() {
    const Dogsshirts=Dogshirts
  return (
    <Row>
      <Col sm={2}>
        <Sidenav/>
      </Col>
      <Col sm={10}>
      <Header/>
      <div className='container'>
      {
            Dogsshirts.map((e)=>{
                return(
                  
                      <div className='a1'>
                        <Link to={`/ViewallDshirts/${e.id}`} key={e.id}>
                        <img src={e.image} alt="" />
                        </Link>
                        <p>Id:{e.id}</p>
                        <p>Title:{e.Brand}</p>
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

export default ViewallDshirts