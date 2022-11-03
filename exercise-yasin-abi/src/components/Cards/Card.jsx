import React from 'react'
import { CardButton, CardDiv, CardImage } from './Card.style'


const Card = ({recipe}) => {
  
  
  
  return (
   <CardDiv>
    <h2>{recipe?.label}</h2>
    <CardImage src={recipe?.images?.REGULAR?.url} />
    <CardButton> View More</CardButton>
   </CardDiv>
  )
}

export default Card