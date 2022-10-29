import React from 'react'
import { Links, Logo, Nav,NavLinkA } from './Navbar.style'
import Images from "../../assets/tastybites.png"

export const Navbar = () => {
  return (
    <Nav>
      <Logo src={Images} />
      <Links>
          <NavLinkA href="/home">Home</NavLinkA>
          <NavLinkA href="/private/about">About</NavLinkA>
          <NavLinkA href="https://github.com/AliAksoyy" target={"_blank"}>Gıthub</NavLinkA>
          <NavLinkA href="/login">Logout</NavLinkA>
      </Links>
    </Nav>
  )
}

