import  Typography  from "@mui/material/Typography";
import  Box  from "@mui/material/Box";
import  Button  from "@mui/material/Button";
import {MultiSelectBox,MultiSelectBoxItem,} from '@tremor/react';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import { select,flex } from "../style/globalStyle";
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
import SalesModal from "../components/modals/SalesModal";

const Sales = () => {

const {getBrands,getProducts,getSales,deleteSales}=useStockCalls()

useEffect(()=>{
  getBrands()
  getProducts()
  getSales()
},[])

const {brands,sales,products}=useSelector(state=>state.stock)


const columnObj={
  date:1,
  brand:1,
  product:1,
  quantity:1,
  price:1,
  price_total:1
}

const {handleSort,sortedData,toggle}=useSortColumn(sales,columnObj)

const [selectedBrands,setSelectedBrands]=useState([])
const [selectedProducts,setSelectedProducts]=useState([])

const [info,setInfo]=useState([])
const [open,setOpen]=useState(false)
console.log(info)

const isSelectedBrand=(item)=> selectedBrands.includes(item.brand) || selectedBrands.length===0
const filteredProducts=products?.filter((item)=>selectedBrands.includes(item.brand))
const isSelectedProducts=(item)=>selectedProducts.includes(item.product) || selectedProducts.length===0

const handleEdit=(row)=> {
  setInfo(row)
  setOpen(true)
}

  return (
    <Box>
      <Typography color="error" variant="h4" mb={3}>Sales</Typography>
      <Button variant="contained" sx={{marginBottom:"1rem"}} onClick={()=>setOpen(true)} >New Sale</Button>
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
        { filteredProducts?.map((item) => (
        <MultiSelectBoxItem key={ item.name } value={ item.name } text={ item.name } />)) }
      </MultiSelectBox>
      </Box>
      <SalesModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />
      <TableContainer component={Paper} sx={{marginTop:"1.5rem"}} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" onClick={()=>handleSort("date", "number")}>
                <Box sx={flex}>
                  <Typography variant="body2">Date</Typography>
                  {toggle.date===1 && <UpgradeIcon />}
                  {toggle.date!==1 && <VerticalAlignBottomIcon />}
                </Box>
                </TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center" onClick={()=>handleSort("brand","text")}>
                <Box sx={flex}>
                  <Typography variant="body2">Brand</Typography>
                  {toggle.brand===1 && <UpgradeIcon />}
                  {toggle.brand!==1 && <VerticalAlignBottomIcon />}
                </Box>
                </TableCell>
                <TableCell align="center" onClick={()=>handleSort("product", "text")}>
                <Box sx={flex}>
                  <Typography variant="body2">Product</Typography>
                  {toggle.product===1 && <UpgradeIcon />}
                  {toggle.product!==1 && <VerticalAlignBottomIcon />}
                </Box>
                </TableCell>
                <TableCell align="center"  onClick={()=> handleSort("quantity","number")}>
                <Box sx={flex}>
                  <Typography variant="body2">Quantity</Typography>
                  {toggle.quantity===1 && <UpgradeIcon />}
                  {toggle.quantity!==1 && <VerticalAlignBottomIcon />}
                </Box>
                </TableCell>
                <TableCell align="center" onClick={()=> handleSort("price","number")}>
                <Box sx={flex}>
                  <Typography variant="body2">Price</Typography>
                  {toggle.price===1 && <UpgradeIcon />}
                  {toggle.price!==1 && <VerticalAlignBottomIcon />}
                </Box>
                </TableCell>
                <TableCell align="center" onClick={()=>handleSort("price_total","number")}>
                <Box sx={flex}>
                  <Typography variant="body2">Amount</Typography>
                  {toggle.price_total===1 && <UpgradeIcon />}
                  {toggle.price_total!==1 && <VerticalAlignBottomIcon />}
                </Box>
                </TableCell>
                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData?.filter(item=>isSelectedBrand(item)).filter(item=>isSelectedProducts(item)).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.createds}
                  </TableCell>
                  <TableCell align="center">{row?.category[0]["name"]}</TableCell>
                  <TableCell align="center">{row?.brand}</TableCell>
                  <TableCell align="center">{row.product}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.price_total}</TableCell>
                  <TableCell align="center">
                    <Box>
                      <EditIcon sx={{"&:hover":{color:"red"}, cursor:"pointer"}} onClick={()=>handleEdit(row)} />
                      <DeleteIcon sx={{"&:hover":{color:"red"}, cursor:"pointer"}} onClick={()=>deleteSales(row.id)} />
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
