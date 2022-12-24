import { Box, Button, Grid, Typography } from "@mui/material";
import useStockCalls from "../hooks/useStockCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";

const Brands = () => {

  const {getBrands}=useStockCalls()

  const {brands}= useSelector(state=>state.stock)
  console.log(brands)

  useEffect(()=> {getBrands()},[])

  return <div>
  <Box >
      <Typography variant="h4" color="error" mb={4}>Brands</Typography>
      <Button variant="contained" mb={2}>New Brand</Button>

      {brands?.length> 0 && (
        <Grid container justifyContent="center" gap={3} mt={2}>
          {brands?.map((brand)=> (
          <Grid key={brand.id}>
            <BrandCard brand={brand} />
          </Grid>
          ))}

        </Grid>
      )}
  </Box>
           
  
  
  
        </div>;
};

export default Brands;
