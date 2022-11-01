import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [query,, setQuery,] = useState("egg")
  const [selectedMeal, setSelectedMeal] = useState("breakfast")
  const [data, setData] = useState("")

  const APP_ID="61dbc14c"
  const APP_KEY ="0962eed2822938c8ade079f6856cfc98	"

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`

  const getData= async() => {
    const {data} = await axios(url)
    setData(data.hits)
  }

  console.log(data)

  useEffect(()=> {
    getData()
  },[])


  return (
    <div>
      Home
    </div>
  )
}

export default Home
