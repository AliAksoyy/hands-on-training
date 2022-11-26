import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { iconFlex } from '../style/globalStyle';
import { Box } from '@mui/material';

export default function BrandCard({brand, setOpen, setInfo}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <EditIcon onClick={()=> setOpen(true)} sx={{"&:hover" : {color:"red"},cursor:"pointer"}}/>
        <DeleteForeverIcon  sx={{"&:hover" : {color:"red"},cursor:"pointer"}}/>
        </Box>
      </CardActions>
    </Card>
  );
}
