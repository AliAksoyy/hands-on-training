import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {globalHoverStyle} from "../style/globalStyle"

const BrandCard =({brand})=> {

    const {name,image}=brand
   
    return(
       
            <Card sx={{p:2, maxWidth:"300px", maxHeight:"400px", minHeight:"430px", display:"flex", flexDirection:"column"}} elevation={10}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                </CardContent>
                <CardMedia
                         component="img"
                        alt="firm-img"
                        width="250"
                        image={image}
                        height="325"
                        sx={{objectFit:"contain", p:2}}
                />
                <CardActions sx={{display:"flex", justifyContent:"center"}}>
               
                    <Button sx={globalHoverStyle}  size="small"><EditIcon /></Button>
                    <Button sx={globalHoverStyle} size="small"><DeleteIcon /></Button>
                
                  
                </CardActions>
             </Card> 
        
    )
}
export default BrandCard