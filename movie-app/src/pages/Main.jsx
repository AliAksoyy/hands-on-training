import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Grid from '@mui/material/Grid';
const Main = () => {
  return (
    <>
     <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch' },display:"flex", justifyContent:"center", backgroundColor:"#ccc"}}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="search movie.." variant="standard" />
      <Button variant="outlined">Search</Button>
      </Box>
     <div className="d-flex justify-content-center gap-4 mt-4 align-items-center">
        <Card sx={{ minWidth: 250, borderRadius:"15px", boxShadow:"3px 3px 10px rgba(0,0,0,0.6) " }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://picsum.photos/id/684/600/400"
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor:"#2a3", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <Typography variant="body2" sx={{color:"white"}}>
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{backgroundColor:"orange", padding:"0.415rem",borderRadius:"5px", color:"white"}}>
            6.3
          </Typography>

        </CardContent>
      </CardActionArea>
      
    </Card>
   
    </div>
    </>
  )
}

export default Main