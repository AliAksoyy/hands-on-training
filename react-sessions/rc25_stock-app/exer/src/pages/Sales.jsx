import  Typography  from "@mui/material/Typography";
import  Box  from "@mui/material/Box";
import  Button  from "@mui/material/Button";
import {MultiSelectBox,MultiSelectBoxItem,} from '@tremor/react';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import { select } from "../style/globalStyle";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import useSortColumn from "../hooks/useSortColumn";

const Sales = () => {

const {getBrands,getProducts,getSales}=useStockCalls()

useEffect(()=>{
  getBrands()
  getProducts()
  getSales()
},[])

const {brands,sales,products}=useSelector(state=>state.stock)
console.log(sales)

const columnObj={
  date:1,
  brand:1,
  product:1,
  quantity:1,
  price:1,
  amount:1
}

const {handleSort,sortedData,toggle}=useSortColumn(brands,columnObj)

console.log(toggle)

const [selectedBrands,setSelectedBrands]=useState([])
const [selectedProducts,setSelectedProducts]=useState([])



console.log(selectedBrands)
console.log(selectedProducts)

  return (
    <Box>
      <Typography color="error" variant="h4" mb={3}>Sales</Typography>
      <Button variant="contained" sx={{marginBottom:"1rem"}} >New Sale</Button>
      <Box sx={select}>
      <MultiSelectBox 
        handleSelect={ (item) => setSelectedBrands(item) }
        placeholder="Select Brands">
        { brands?.map((item) => (
        <MultiSelectBoxItem key={ item.name } value={ item.name } text={ item.name } />)) }
      </MultiSelectBox>
      <MultiSelectBox 
        handleSelect={ (item) => setSelectedProducts(item) }
        placeholder="Select Products">
        { products?.map((item) => (
        <MultiSelectBoxItem key={ item.name } value={ item.name } text={ item.name } />)) }
      </MultiSelectBox>
      </Box>
      <TableContainer component={Paper} sx={{marginTop:"1.5rem"}} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center" onClick={()=>handleSort("brand","text")}>Brand</TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sales?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.createds}
                  </TableCell>
                  <TableCell align="center">{row.category[0]["name"]}</TableCell>
                  <TableCell align="center">{row.brand}</TableCell>
                  <TableCell align="center">{row.product}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.price_total}</TableCell>
                  <TableCell align="center">
                    <Box>
                      <EditIcon sx={{"&:hover":{color:"red"}, cursor:"pointer"}} />
                      <DeleteIcon sx={{"&:hover":{color:"red"}, cursor:"pointer"}} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>
    </Box>
  );
};

export default Sales;
