import React from 'react'
import {useLocation} from "react-router-dom"

export const Details = () => {
  const {state:recipe} =useLocation()
  console.log(recipe)
  return (
    <div>Details</div>
  )
}

