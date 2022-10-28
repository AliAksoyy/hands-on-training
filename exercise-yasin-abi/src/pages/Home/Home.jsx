import React, { useState } from 'react'
import { useEffect } from 'react'
import { Cards } from '../../components/Cards/Cards'
import { Header } from '../../components/Header/Header'
import {Navbar} from "../../components/Navbar/Navbar"

export const Home = () => {

  const[recipes,setRecipe]=useState([])


  const getRecipe =(query,mealType) => {

    const appID ="d96c2393"
    const appKey ="fad46d838ea94ddb14caf25719fc08db	"

    fetch(`https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query}&app_id=${appID}&app_key=${appKey}&mealType=${mealType}`)
    .then((res)=>res.json())
    .then((data)=> setRecipe(data.hits) )
  }

useEffect(()=> {
  getRecipe()
},[])




  return (
    <>
      <Navbar />
      <Header getRecipe={getRecipe} />
      <Cards recipes={recipes} />
    </>
  )
}

