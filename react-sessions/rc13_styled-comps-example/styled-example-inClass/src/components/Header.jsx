import React from 'react'
import Button from './style/Button.styled'
import StyledHeader, { Logo, Nav } from './style/Header.styled'

const Header = () => {
  return (
    <StyledHeader>
    <Nav>
      <Logo src='./images/logo.png' />
      <div>
          <Button color="red">Apply Courses</Button>
          <Button bg="red">Talk to Adviser</Button>
      </div>
    </Nav>
    
      
    </StyledHeader>
    
  )
}

export default Header