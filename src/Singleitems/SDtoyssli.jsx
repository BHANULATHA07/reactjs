import React from 'react'
import { useParams } from 'react-router-dom';
import { Dogtoys } from '../Data/Dtoys';
import { Link } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header'
function SDtoyssli() {
    const {id}=useParams();
    const product=Dogtoys.find((e)=>e.id===Number(id));
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
            <Link to ='/Cart'>
             <button className='btn btn-primary' >Cart</button>
            </Link>
            </div>
            
        </div>
        </Col>
    </Row>
  );
}

export default SDtoyssli