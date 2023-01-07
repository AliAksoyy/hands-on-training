import { Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const MoviCard = ({movies}) => {
  const navigate=useNavigate()
  return (
    <Grid container  justifyContent="center" alignItems="center" spacing={2} className="text-center " sx={{border:"2px solid red"}} >
      {movies.map((movie,i)=> {
    
        return(
          <Grid  key={i} item xs={12} sm={10} md={5}  sx={{border:"2px solid blue"}} >
           <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image ={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                alt="green iguana"
                sx={{objectFit:"contain"}}
                onClick={()=> navigate(`/details${movie.id}`, {state:movie})}
              />
              <Typography className="text-center">{movie.original_title}</Typography>
            </CardActionArea>
          </Card>
          </Grid>
        )
      })}

    </Grid>
  )
}

export default MoviCard
