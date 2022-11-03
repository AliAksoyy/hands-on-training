import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CardButton, CardDiv, CardImage } from './Card.style'


const Card = ({recipe}) => {
  const navigate=useNavigate()
  
  // console.log(recipe);
  
  return (
   <CardDiv>
    <h2>{recipe?.label}</h2>
    <CardImage src={recipe?.images?.REGULAR?.url} />
    <CardButton onClick={()=> navigate("/private/details", {state:recipe})}> View More</CardButton>
   </CardDiv>
  )
}

export default Card