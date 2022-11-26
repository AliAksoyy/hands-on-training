import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modals/BrandModal";
import useStockCalls from "../hooks/useStockCalls"
import { gridFlex } from "../style/globalStyle";

const Brands = () => {

  const [open, setOpen] = useState(false);
  const [info, setInfo] =useState({name:"", image:""})

const {getBrands}= useStockCalls()

const {brands} = useSelector(state => state.stock)
console.log(brands)



useEffect(()=> {
  getBrands()
},[])


console.log(open)


  return (

  <div>
    <Box>
      <Typography variant="h4" mb={4}>
        Brands
      </Typography>
      <Button variant="contained" onClick={()=>{setOpen(true); setInfo({})}}> New Brands</Button>

      <BrandModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />
      

        <Grid container sx={gridFlex} >
        {brands?.map((brand)=> 
        <Grid item key={brand.id}>
          <BrandCard  brand={brand} setInfo={setInfo} info={info} setOpen={setOpen}/>
        </Grid>
        )}
      </Grid>
     
    
    </Box>



  </div>
  )
};

export default Brands;
