import React, { useState,useEffect } from 'react'
import { useAuthContext } from '../context/ProviderAuth'
import MoviCard from "../components/MoviCard"
import Header from '../components/Header'
const Main = () => {
const {authUser}=useAuthContext()
console.log(authUser)
const [movies,setMovies]=useState([])

const getMovies=()=> {
  const api_key="f9d519cf637913b53609ad35ac541965"
  const url=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  fetch(url).then(res=>res.json()).then((data)=>setMovies(data.results)).catch(err=>console.log(err))
}
useEffect(()=> {getMovies()},[])
console.log(movies)


  return (
    <>
    <Header/>
    <div style={{marginTop:"2rem"}}><MoviCard movies={movies} setMovies={setMovies} /></div>

    </>
  )
}

export default Main