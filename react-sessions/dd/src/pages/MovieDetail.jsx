import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import {useAuthContext} from "../context/ProviderAuth"


const MovieDetail = () => {


  const {id}=useParams()
  console.log(id)
  const {state}=useLocation()
  console.log(state)
  // const {authUser}=useAuthContext()
  // console.log(authUser)
  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail