import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {useNavigate} from "react-router-dom"

const Main = () => {


  const[search,setSearch]=useState("")

  const [datas,setDatas]= useState([])





  const navigate = useNavigate()
  
  const handleSubmit=(e)=> {
    e.preventDefault()
    getMovies(search)
    setSearch("")
  }

  const getDatas =()=> {
    const API_KEY ="f9d519cf637913b53609ad35ac541965"
  const url=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  

    fetch(url).then((res)=> {
    if(!res.ok){
      throw new Error("hata var")
    }
    return res.json()
  }).then((data)=> setDatas(data.results))
  .catch((err)=> console.log(err))
}
useEffect(()=> {
  getDatas()
},[])


const getMovies = (search) => {
  const API_KEY ="f9d519cf637913b53609ad35ac541965"
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
  fetch(url).then((res)=> res.json()).then((data)=> setDatas(data.results)).catch((err)=> console.log(err))
}










  return (
    <div className="p-2">
     <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch' },display:"flex", justifyContent:"center", backgroundColor:"#ccc"}}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="search movie.." value={search} variant="standard" onChange={(e)=> setSearch(e.target.value)} />
      <Button  onClick={handleSubmit} variant="outlined">Search</Button>
      </Box>
     <div className="d-flex justify-content-center gap-4 mt-4 align-items-center flex-wrap">
     {datas?.map((data)=> {
      const {id,vote_average,poster_path,title} = data
      return(
        
        <Card onClick={()=>navigate(`moviedetail/${id}`)}  key={id} sx={{ width: "300px", height:"350px", borderRadius:"15px", boxShadow:"3px 3px 10px rgba(0,0,0,0.6)"}}>
      <CardActionArea > 
        <CardMedia
          component="img"
          height="280"
          image={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor:"#2a3", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <Typography variant="body2" sx={{color:"white", width:"80%", padding:"0.3rem"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{backgroundColor:"orange", padding:"0.415rem",borderRadius:"5px", color:"white"}}>
            {vote_average}
          </Typography>

        </CardContent>
      </CardActionArea>
      
    </Card>
       
      )
     })}
   
   
    </div>
    </div>
  )
}

export default Main