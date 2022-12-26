import { Avatar, Grid, Paper,Box,Typography } from '@mui/material'
import { amber, indigo, pink } from '@mui/material/colors'
import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from 'react-redux';

const KpiCards = () => {

    const {sales,purchases}=useSelector(state=>state.stock)

    const totalSales=sales?.map((item)=>Number(item.price_total)).reduce((acc,cur)=> acc+cur,0)

    const totalPurchases=purchases?.map((item)=> Number(item.price_total)).reduce((acc,cur)=> acc+cur,0)

    const totalProfit = totalSales-totalPurchases

    const data=[
        
    {   title:"Sales",
        metric:`$${totalSales || ""}`,
        icon:<MonetizationOnIcon sx={{fontSize:"3rem"}}/>,
        color:indigo[900],
        bgColor:indigo[300]
    },
    {
        title:"Profit",
        metric:`$${totalProfit || ""}`,
        icon:<CreditScoreIcon sx={{fontSize:"3rem"}}/>,
        color:pink[900],
        bgColor:pink[300]
    },
    {
        title:"Purchase",
        metric:`$${totalPurchases || ""}`,
        icon:<ShoppingBasketIcon sx={{fontSize:"3rem"}}/>,
        color:amber[900],
        bgColor:amber[300]
    }]

  

  return (
   <Grid container justifyContent="center" alignItems="center" spacing={3}>
    {data.map((item,index)=>(
    <Grid item key={item.index} sx={{width:"400px"}}>
        <Paper sx={{p:2}} elevation={10}>
            <Box sx={{display:"flex", justifyContent:"space-evenly"}}>
                <Avatar sx={{width:"4rem",height:"4rem", color:item.color, backgroundColor:item.bgColor}}>{item.icon}</Avatar>
                    <Box>
                        <Typography variant="button">{item.title}</Typography>
                        <Typography variant="h5">{item.metric}</Typography>
                    </Box>
            </Box>
        </Paper>
    </Grid>
    ))}
   
   </Grid>
  )
}

export default KpiCards