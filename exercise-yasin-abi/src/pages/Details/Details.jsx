import React from 'react'
import {useLocation} from "react-router-dom"
import { ContentDiv, ContentImage, DetailsDiv, NutrientsDiv, RecipeOrderDiv, TitleDiv, TitleImage } from './Detail.style'
import pic from "../../assets/diet.svg"
import { Navbar } from '../../components/Navbar/Navbar'

export const Details = () => {
  const {state:recipe} =useLocation()
  console.log(recipe)
  return (
    <>
    <Navbar />
    <DetailsDiv>
      <TitleDiv>
        <h1>{recipe.label}</h1>
        <TitleImage src={pic} />
      </TitleDiv>
      <ContentDiv>
        <NutrientsDiv>
        {(Object.values(recipe.totalNutrients)).map((item)=> {

          return(
            <p>{item.label}  {item.quantity.toFixed(2)} {item.unit}</p>
          )
        })}
        </NutrientsDiv>
        <ContentImage src={recipe.images.REGULAR.url} />
        <RecipeOrderDiv>
        {Object.values(recipe.ingredientLines).map((item)=> {
          console.log(item)
          return(
          <p>{item}</p>

          )
        })}
        </RecipeOrderDiv>
      </ContentDiv>
    </DetailsDiv>
    </>
  )
}

