import React from 'react'
import {useParams, useLocation} from "react-router-dom"


const PersonDetails = () => {
    const {id} =useParams()
    console.log(id);
    const {state:person} = useLocation()
    console.log(person);
  return (
    <div>PersonDetails</div>
  )
}

export default PersonDetails