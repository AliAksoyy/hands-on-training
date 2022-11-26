import { Box, Button, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStockCalls from "../hooks/useStockCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";



const Products = () => {

  const {products}=useSelector(state=>state.stock)
  console.log(products)

const {getProducts, getBrands, getCategories}=useStockCalls()

useEffect(()=>{
  getProducts()
  getBrands()
  getCategories()
},[])


  return (
      <Box>
        <Typography variant="h4" my={4} color="error">
          Products
        </Typography>
        <Button variant="contained" sx={{marginBottom:"4rem"}}>New Product</Button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} elevation={10}>
             
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{"&:hover":{color:"red"}, cursor:"pointer"}}>#</TableCell>
                <TableCell align="center" sx={{"&:hover":{color:"red"}, cursor:"pointer"}}>Category</TableCell>
                <TableCell align="center">
                <Box sx={{display:"flex", gap:1, justifyContent:"center", cursor:"pointer", "&:hover":{color:"red"}}}>
                    <div>Brand</div>
                    {true && <UpgradeIcon />}
                    {false && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={{display:"flex", gap:1, justifyContent:"center", cursor:"pointer", "&:hover":{color:"red"}}}>
                    <div>Name</div>
                    {true && <UpgradeIcon />}
                    {false && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={{display:"flex", gap:1, justifyContent:"center", cursor:"pointer", "&:hover":{color:"red"}}}>
                    <div>Stock</div>
                    {true && <UpgradeIcon />}
                    {false && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center" sx={{"&:hover":{color:"red"}, cursor:"pointer"}}>Operation</TableCell >
              </TableRow>
            </TableHead>
               <TableBody>
                  {products?.map((product,i)=> (
                    <TableRow key={i+1}>
                    <TableCell align="center" component="th" scope="row">
                      {i+1}
                    </TableCell>
                    <TableCell align="center">{product.category}</TableCell>
                    <TableCell align="center">{product.brand}</TableCell>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{product.stock}</TableCell>
                    <TableCell align="center"><DeleteForeverIcon sx={{"&:hover": {color:"red"}, cursor:"pointer"}} /></TableCell>
                  </TableRow> 
                  ))}
                   
                
              </TableBody> 
            </Table>
      </TableContainer>
      </Box>
  )
};

export default Products;
