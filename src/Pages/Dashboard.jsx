import React from 'react'
import Sidenav from '../Components/Sidenav'
import {Row,Col} from 'react-bootstrap'
import Header from '../Components/Header'
import ViewDtoys from '../View/ViewDtoys'
import ViewDshirts from '../View/ViewDshirts'
import ViewDbelts from '../View/ViewDbelts'



function Dashboard() {
  return (
    <div className='dash'>
        <Row>
            <Col sm={2}>
                <Sidenav />
            </Col>
            <Col sm={10}>
                <Header />
                <div style={{marginTop:'20px'}}>
                <ViewDtoys/>
                </div>
                <div style={{marginTop:'10px'}}>
                <ViewDshirts />
                </div>
                <div style={{marginTop:'10px'}}>
                <ViewDbelts />
                </div>
               
            </Col>
        </Row>
        

    </div>
  )
}

export default Dashboard