import React from 'react'
import { CardButton, CardDiv, CardImage } from './Card.style'
import defaultImg from "../../assets/home.svg"

const Card = () => {
  return (
   <CardDiv>
    <h2>Pizza</h2>
    <CardImage src={defaultImg} />
    <CardButton> View More</CardButton>
   </CardDiv>
  )
}

export default Card