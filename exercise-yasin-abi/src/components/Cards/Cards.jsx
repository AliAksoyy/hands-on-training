import React from 'react'
import { MyCards } from './Cards.style'
import {Card} from "./Card"

export const Cards = ({recipes}) => {
  

  return (
      <MyCards>
      {recipes?.map((item,i)=> { 
      
        const {recipe} =item
        return(
          <Card  key={i} recipe={recipe} />
        )
      })}
         
      </MyCards>
    
  )
}

