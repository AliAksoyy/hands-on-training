import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import {useAuthContext} from "../context/ProviderAuth"


const MovieDetail = () => {

const [details,setDetails]=useState({})
  const {id}=useParams()
  console.log(id)
  const {state}=useLocation()
  console.log(state)
  // const {authUser}=useAuthContext()
  // console.log(authUser)

const getDetails=async()=> {
  const api_key="f9d519cf637913b53609ad35ac541965"
  const url=`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
try {
  const res= await fetch(url)
  const data= await res.json()
  setDetails(data)
}
  catch(err){
    console.log(err)
  }

}
console.log(details)

useEffect(()=> {getDetails()},[])



  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail