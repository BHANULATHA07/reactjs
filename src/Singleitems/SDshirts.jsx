import React from 'react'
import { Dogshirts } from '../Data/Dshirts';
import { useParams } from 'react-router-dom';

import { Row,Col } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header'

function SDshirts() {
    const {id}=useParams();
    const product=Dogshirts.find((e)=>e.id===Number(id));
  return (
    <Row>
        <Col sm={2}>
            <Sidenav/>
        </Col>
        <Col sm={10}>
        <Header/>   
            <div className='container d-flex  justify-content-center  align-items-center'>
            <div className='border' style={{marginTop:'150px', border:'1px solid black'}}>   
            
                <img src={product.image}  alt="" style={{height:'200px'}}/>
            
            <div>
            <p>ID: {product.id}</p>
            <p>Brand: {product.Title}</p>
            <p>Color: {product.color}</p>
            <p>Price: {product.price}</p>
            </div>
            <div className='car'>
            <button className='btn btn-primary' >Cart</button>
            </div>
            </div>
            </div>
        </Col>
    </Row>
  );
}



export default SDshirts