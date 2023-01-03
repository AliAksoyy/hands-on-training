import React from 'react'
import Header from "../../components/header/Header"
import { Div } from './Home.style'
import Card from "../../components/card/Card"
import { useState } from 'react'
import { useEffect } from 'react'


const Home = () => {

const [query,setQuery]=useState("")
const [mealType,setMealType]=useState("Lunch")
const [eats,setEats]=useState([])


useEffect(()=> {getMeal()},[])

console.log(query)

const getMeal=()=> {
  const app_id="d96c2393"
  const app_key="fad46d838ea94ddb14caf25719fc08db"
  const baseUrl="https://api.edamam.com/search?q="
  const url=`${baseUrl}${query}&app_id=${app_id}&app_key=${app_key}&mealType=${mealType}`
  fetch(url).then((res)=>res.json()).then((data)=> setEats(data.hits)).catch(err=>console.log(err))
}


  return (
    <Div>
    <Header query={query} setQuery={setQuery} mealType={mealType} setMealType={setMealType}/>
    {eats?.map((item,i)=> {
      return(
        <Card key={i} item={item} getMeal={getMeal} />     
      )
    })}
    
    </Div>
  )
}

export default Home