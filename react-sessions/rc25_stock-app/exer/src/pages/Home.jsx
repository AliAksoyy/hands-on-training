import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import Charts from "../components/Charts";
import KpiCards from "../components/KpiCards";
import useStockCalls from "../hooks/useStockCalls";


const Home = () => {

  const {getSales,getPurchases} = useStockCalls()

  useEffect(()=> {
    getSales()
    getPurchases()

   
  },[])


  return (
    <Box>
      <Typography color="error" mb={4} variant="h4"></Typography>
      <KpiCards />
      <Charts />
    </Box>
  )
};

export default Home;
