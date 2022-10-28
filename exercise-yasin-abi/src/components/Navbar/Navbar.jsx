import React from 'react'
import { Links, Logo, Nav,NavLinkA } from './Navbar.style'
import Images from "../../assets/tastybites.png"

export const Navbar = () => {
  return (
    <Nav>
      <Logo src={Images} />
      <Links>
          <NavLinkA href="/">Home</NavLinkA>
          <NavLinkA href="/private/about">About</NavLinkA>
          <NavLinkA href="https://www.google.com">Gıthub</NavLinkA>
          <NavLinkA href="/login">Logout</NavLinkA>
      </Links>
    </Nav>
  )
}

