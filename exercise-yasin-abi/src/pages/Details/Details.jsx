import React from 'react'
import {useLocation} from "react-router-dom"
import { ContentDiv, ContentImage, DetailsDiv, NutrientsDiv, RecipeOrderDiv, TitleDiv, TitleImage } from './Detail.style'
import pic from "../../assets/diet.svg"

export const Details = () => {
  const {state:recipe} =useLocation()
  console.log(recipe)
  return (
    <DetailsDiv>
      <TitleDiv>
        <h1>{recipe.label}</h1>
        <TitleImage src={pic} />
      </TitleDiv>
      <ContentDiv>
        <NutrientsDiv>
          <p>as</p>
        </NutrientsDiv>
        <ContentImage src={} />
        <RecipeOrderDiv>
          <p>sadas</p>
        </RecipeOrderDiv>
      </ContentDiv>
    </DetailsDiv>
  )
}

