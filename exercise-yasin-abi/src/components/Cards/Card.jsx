import React from 'react'
import { CardButton, CardImage, CardTitle, MyCard } from './Cards.style'
// import {useNavigate} from "react-router-dom"

const Card = ({recipe}) => {
   console.log(recipe);
  return (
    <MyCard>
        <CardTitle>{recipe.label}</CardTitle>
        <CardImage src={recipe.images.REGULAR.url}/>
        <CardButton>Details</CardButton>
    </MyCard>
  )
}

export default Card