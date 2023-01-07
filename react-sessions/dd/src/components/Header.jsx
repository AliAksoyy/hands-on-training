import React, { useState } from 'react'
import { useEffect } from 'react'

const Header = () => {


    const [search,setSearch]=useState([])
    const [query,setQuery]=useState("")


    useEffect(()=> {
        getVideos()
    },[])

    const getVideos=async(query)=> {
        const api_key="f9d519cf637913b53609ad35ac541965"
        const url=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
        console.log(url)
        try{
            const res=await fetch(url)
            const data=await res.json()
            setSearch(data.results)
        }catch(err){
            console.log(err)
        }
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        getVideos(query)
        setQuery("")
    }
    console.log(search)
  return (
    <div style={{height:"3rem", backgroundColor:"grey",padding:"0.5rem" }} className='text-center'>
    <form onSubmit={handleSubmit}>
    <input type="text" value={query || ""} onChange={(e)=> setQuery(e.target.value)} />
    <button type='submit'>Serach</button>
    </form>
       
    </div>
  )
}

export default Header