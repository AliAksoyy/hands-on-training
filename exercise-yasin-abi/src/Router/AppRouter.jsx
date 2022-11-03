import React, { useEffect, useState } from 'react'
import {Routes,Route, useLocation} from "react-router-dom"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Details from "../pages/Details/Details"
import Login from "../pages//Login/Login"
import Register from "../pages/Register/Register"
import PrivateRouter from './PrivateRouter'
import Navbar from '../components/Navbar/Navbar'
import axios from "axios"

const AppRouter = () => {
 const {state} = useLocation()
 
const [recipes, setRecipes] = useState("")

const getData = async(query,mealType) => {
    const appID= "61dbc14c";
    const appKey = "0962eed2822938c8ade079f6856cfc98";
    const url = `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query}&app_id=${appID}&app_key=${appKey}&mealType=${mealType}`
  try {
    const {data} = await axios(url)
    setRecipes(data.hits)
  } catch (error) {
    console.log(error)
  }
}


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home getData={getData} recipes={recipes} />} />
      <Route path="/private" element={<PrivateRouter />} >
        <Route path="/private/about" element={<About />} />
        <Route path="/private/details" element={<Details />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
    </Routes>
    </>



  )
}

export default AppRouter