import React from 'react'
import { Container, Image } from 'react-bootstrap'
import img from "../assests/react.svg"
const Header = () => {
  return (
    <Container>
    <Image fluid className='w-25' src={img}/>
    </Container>
  )
}

export default Header