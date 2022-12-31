import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Languages from './Languages'
import {data} from "../helpers/data"
const Card = () => {

  return (
    <Container style={{background:"#e343a3"}} className="rounded-4 mt-5 p-3">
    <h1 className="text-white my-3">Languages</h1>
      <Row className='g-3 justify-content-center'>
      {data.map((item,i)=> {
        return(
          <Col xs={12} sm={6} md={4} lg={3} key ={i}><Languages {...item}/></Col>
        )
      })}
      
      </Row>
      
    </Container>
  )
}

export default Card