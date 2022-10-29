import React from 'react'
import { AboutDetailDiv, AboutDiv, AboutImage } from './About.style'
import AboutFoto from "../../assets/home.svg"
import {Navbar  } from "../../components/Navbar/Navbar"

export const About = () => {
  return (
    <>
    <Navbar />
    <AboutDiv>
      <AboutImage src={AboutFoto} />
      <AboutDetailDiv>
        <h2>I'm Ali</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis aut sapiente!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quod earum repellat illum unde voluptates vel temporibus molestiae quasi id?</p>
        <p><span style={{color:"blue", fonstSize:"1.3rem"}}>Send email</span> : aliaksoy@gmail.com</p>
      </AboutDetailDiv>
    </AboutDiv>
    </>
  )
}

