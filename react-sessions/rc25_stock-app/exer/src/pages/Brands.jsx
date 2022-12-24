import { Box, Button, Grid, Typography } from "@mui/material";
import useStockCalls from "../hooks/useStockCalls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modals/BrandModal";

const Brands = () => {

  const [open,setOpen]= useState(false)

  const [info,setInfo]=useState({name:"", image:""})

  const {getBrands}=useStockCalls()

  const {brands}= useSelector(state=>state.stock)
  console.log(brands)

  useEffect(()=> {getBrands()},[])

  return <div>
  <Box >
      <Typography variant="h4" color="error" mb={4}>Brands</Typography>
      <Button variant="contained" mb={2} onClick={()=> setOpen(true)}>New Brand</Button>

        <BrandModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {brands?.length> 0 && (
        <Grid container justifyContent="center" gap={3} mt={2}>
          {brands?.map((brand)=> (
          <Grid item key={brand.id}>
            <BrandCard brand={brand} setOpen={setOpen} setInfo={setInfo}  />
          </Grid>
          ))}

        </Grid>
      )}
  </Box>
           
  
  
  
        </div>;
};

export default Brands;
