import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import useStockCalls from '../hooks/useStockCalls';
import EditIcon from '@mui/icons-material/Edit';
import {globalHoverStyle} from "../style/globalStyle"

export default function FirmCard({firm, open, setOpen, info, setInfo}) {

    const {deleteFirm, postFirm} = useStockCalls()

    const {name, phone, image, address, id} = firm

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {address}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}}>
        <Button onClick={()=> {setOpen(true); setInfo(firm); postFirm(info) }} sx={globalHoverStyle} size="small"><EditIcon  /></Button>
        <Button sx={globalHoverStyle} onClick={()=> deleteFirm(id)} size="small" ><DeleteIcon  /></Button>
      </CardActions>
    </Card>
  );
}