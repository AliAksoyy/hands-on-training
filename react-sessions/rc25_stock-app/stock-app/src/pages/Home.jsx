import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Charts from "../components/Charts";
import KpiCards from "../components/KpiCards";

const Home = () => {
  const { getFirms, getSales } = useStockCalls();
  useEffect(() => {
    getFirms();
    getSales();
  }, []);

  return <Box>
    <Typography variant="h4" color="error" mb={4}>Dashboard</Typography>
    <KpiCards />
    <Charts />
  </Box>;
};

export default Home;
