import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {

  const [movies,setMovies]=useState([])

  useEffect(() => {
   getMovies(FEATURED_API)
  }, [])
  

  const getMovies = (API)=> {

    fetch(API).then((res)=> {
      if(!res.ok){
        throw new Error("hata")
      }
      return res.json()
    }).then((data)=> setMovies(data.results))
    .catch((err)=>console.log(err));

  }









  return <div classsName="flex justify-content-center flex-wrap">
    {movies.map((movie)=> <MovieCard key={movie.id} {...movie} />)}
  </div>;
};

export default Main;
