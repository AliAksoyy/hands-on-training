import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { indigo, pink,amber } from '@mui/material/colors';

const KpiCard = () => {

    const data = [
        {title:"sales", metric: "$0", icon: <MonetizationOnIcon />, color:indigo[900], bgColor:indigo[300]},
        {title:"profit", metric: "$0", icon: <ShoppingCartIcon />, color:pink[900], bgColor:indigo[300]},
        {title:"purchases", metric: "$0", icon: <PaymentsIcon />, color:amber[900], bgColor:amber[300]},
        

    ]




  return (
    <Grid container  justfiyContent="center" gap={3} alignItems="center" >
    {data.map((item,i)=> (
        <Grid key={i} item>
            <Paper sx={{p:2}} elevation={10}>
                <Box>
                <Avatar>{item.icon}</Avatar>
                  <Box>
                    <Typography>{item.tile}</Typography>
                    <Typography>{item.metric}</Typography>
                  </Box>  
                </Box>
            </Paper>
        </Grid>
    ))}
        
    </Grid>
  )
}

export default KpiCard