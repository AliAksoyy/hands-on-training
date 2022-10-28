import React from 'react'
import { MyCards } from './Cards.style'
import {Card} from "./Card"

export const Cards = ({recipes}) => {
  

  return (
      <MyCards>
      {recipes?.map((item,i)=> { 
      
        
        return(
          <Card  key={i} recipe={item.recipe} />
        )
      })}
         
      </MyCards>
    
  )
}

