import React from 'react'
import { Links, Logo, Nav,NavLinkA } from './Navbar.style'
import Images from "../../assets/tastybites.png"

export const Navbar = () => {
  return (
    <Nav>
      <Logo src={Images} />
      <Links>
          <NavLinkA to="/">Home</NavLinkA>
          <NavLinkA to="/private/about">About</NavLinkA>
          <NavLinkA to="https://www.google.com">Gıthub</NavLinkA>
          <NavLinkA to="/login">Logout</NavLinkA>
      </Links>
    </Nav>
  )
}

