import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { iconFlex } from '../style/globalStyle';
import { Box } from '@mui/material';
import useStockCalls from "../hooks/useStockCalls"

export default function BrandCard({brand, setOpen, setInfo}) {

    const {deleteBrands} =useStockCalls()

  return (
    <Card sx={{ maxWidth: 345 }} elevation={20}>
        <CardContent>
        <Typography align='center'  variant="h5" component="div">
          {brand?.name}
        </Typography>
        
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={brand?.image}
        sx={{objectFit:"contain", p:"2"}}
        
      />
      
      <CardActions>
        <Box sx={iconFlex}>
        <EditIcon onClick={()=> {setOpen(true);  setInfo(brand)}} sx={{"&:hover" : {color:"red"},cursor:"pointer"}}/>
        <DeleteForeverIcon onClick={()=> deleteBrands(brand.id)}  sx={{"&:hover" : {color:"red"},cursor:"pointer"}}/>
        </Box>
      </CardActions>
    </Card>
  );
}
