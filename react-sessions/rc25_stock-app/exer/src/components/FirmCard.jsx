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
import CardHeader  from '@mui/material/CardHeader';

export default function FirmCard({firm, open, setOpen, info, setInfo}) {

    const {deleteFirm} = useStockCalls()

    const {name, phone, image, address, id} = firm

  return (
    <Card sx={{p:2, maxWidth:"300px", maxHeight:"400px", minHeight:"430px", display:"flex", flexDirection:"column"}} elevation={10}>
    <CardHeader title={name} subheader={address} />
      <CardMedia
        component="img"
        alt="firm-img"
        width="250"
        image={image}
        height="325"
        sx={{objectFit:"contain", p:2}}

      />
      <CardContent>
        <Typography gutterBottom variant="body2" color="text.secondary" >
         Phone: {phone}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}}>
        <Button onClick={()=> {setOpen(true); setInfo(firm) }} sx={globalHoverStyle} size="small"><EditIcon  />
        </Button>
        <Button sx={globalHoverStyle} onClick={()=> deleteFirm(id)} size="small" ><DeleteIcon  />
        </Button>
      </CardActions>
    </Card>
  );
}