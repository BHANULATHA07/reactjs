import React from 'react'
import {Dogsbelts} from '../Data/Dbelts'
import { useParams } from 'react-router-dom';
import Header from '../Components/Header'
import {Row,Col} from 'react-bootstrap'
import Sidenav from '../Components/Sidenav';


function SDbelts() {
   
    const {id}=useParams();
    const product=Dogsbelts.find((e)=>e.id===Number(id));
  return (
    <Row>
        <Col sm={2}>
           <Sidenav/>
        </Col>
        <Col sm={10}>
          <Header/>  
            <div className='container d-flex border justify-content-center  align-items-center'>
            <div>
                <img src={product.image}  alt="" style={{height:'200px'}}/>
            </div>
            <div>
            <p>ID: {product.id}</p>
            <p>Brand: {product.Title}</p>
            <p>Color: {product.color}</p>
            <p>Price: {product.price}</p>
            
            
             <button className='btn btn-primary' >Cart</button>
            
            </div>
            
        </div>
        </Col>
    </Row>
  );
}

export default SDbelts
