import React from 'react'
import Card from './Card'
import { CardsDiv } from './Card.style'

const Cards = ({recipes}) => {

  console.log(recipes);
  return (

  <CardsDiv>
   {recipes.map((recipe,i)=> {
    return(
    <Card key = {i} {...recipe}  />   
    )
   })}
   </CardsDiv>
  )
}

export default Cards