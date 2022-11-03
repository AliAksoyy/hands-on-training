import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import data from "../data"
import Grid from "@mui/material/Grid"

export default function CardGrid() {
  return (
<Grid container spacing={2}>
    {data.map((item)=> {
        const {id, text,img,name}=item
        return (
            <>
            <Typography variant="h4" color="error" align="center" mt={4} >
                Card and grid
            </Typography>
            <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center">
            <Card >

            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt="img"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {text}
                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            </Grid>
            </>
        )
    })}

    
    </Grid>
  );
}