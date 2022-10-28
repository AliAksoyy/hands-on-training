import React from 'react'
import { CardButton, CardImage, CardTitle, MyCard } from './Cards.style'

export const Card = ({recipe}) => {
  console.log(recipe)
  return (
  
        <MyCard >
          <CardTitle>{recipe.label}</CardTitle>
          <CardImage src={recipe.images.REGULAR.url}  />
          <CardButton>Details</CardButton>
       </MyCard>

  )
}

