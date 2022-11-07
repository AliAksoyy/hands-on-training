import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

const MovieDetail = () => {

  const [movieDetail,setMovieDetail]=useState("")
  const [videos,setVideos]=useState("")

  const {id} = useParams()
  

  const getMoviesId = (id) => {
    const API_KEY ="f9d519cf637913b53609ad35ac541965"
    const url=`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    fetch(url).then((res)=>{
      if(!res.ok) {
        throw new Error("hata var movies'te")
      }
      return res.json()}).then((data)=> setMovieDetail(data)).catch((err)=>console.log(err))
  }


  const getVideos= (id)=> {
    const API_KEY ="f9d519cf637913b53609ad35ac541965"
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
    fetch(url).then((res)=> res.json()).then((data)=> {console.log(data.results[0].key);
    return setVideos(data.results[0].key)})
    .catch((err)=>console.log(err))
  }



useEffect(() => {
  getMoviesId(id)
  getVideos(id)
}, [])

 

  return (
    <div className="d-flex flex-column align-items-center p-3 " sytle={{height:"60vh", border:"3px solid red"}} >
        <div className='d-flex justify-content-center align-items-center m-5  ' style={{width:"100%", height:"35vh"}} >

         
        <iframe width="70%" height="240" src={`https://www.youtube.com/embed?v=${videos}`} frameBorder="0" ></iframe>
      {console.log("ali")}

        </div>
        <div className="card mt-3" style={{width:"100%", height:"40vh"}}>
          <div className="row g-0">
            <div className="col-md-4" style={{width:"30%"}}>
              <img src={`https://image.tmdb.org/t/p/w1280${movieDetail?.poster_path}`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8" style={{width:"70%", height:"50vh"}}>
              <div className=" d-flex flex-column justify-content-between " style={{height:"65vh"}}>
              <div className="ms-2">
                <h5 className="card-title">{movieDetail?.title}</h5>
                <p className="card-text">
                 {movieDetail?.overview}
                </p>
                </div>
                <div>
                <p className="card-text ms-2">
                 {movieDetail?.title}
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieDetail