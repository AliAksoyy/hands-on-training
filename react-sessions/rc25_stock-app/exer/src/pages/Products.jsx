
import { Typography, Box,Button,} from "@mui/material";
import {useEffect, useState} from "react"
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModals from "../components/modals/FirmModals";
import useStockCalls from "../hooks/useStockCalls";
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { globalHoverStyle } from "../style/globalStyle";
import { flex } from "../style/globalStyle";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import useSortColumn from "../hooks/useSortColumn"



const Products = () => {
  const {getCategories,getBrands,getProducts}= useStockCalls()
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name:"",
    address:"",
    phone:"",
    image:""
  })
  const columObj={
    brand:1,
    name:1,
    stock:1
  }

  const {products} =useSelector(state=>state.stock)

  const {toggle, sortedData,handleSort} =useSortColumn(products,columObj)

useEffect(() => {
 getBrands()
 getCategories()
 getProducts()
},[])

  return ( 
        <div>
            <Box>
              <Typography variant="h4" mb={4} color="error">
                Products
              </Typography>
              <Button variant="contained" mb={2} onClick={()=> setOpen(true)}>New Products</Button>

                 {/* <FirmModals open={open} setOpen={setOpen} info={info} setInfo={setInfo} /> */}

               {sortedData?.length > 0 && (
                <TableContainer sx={{mt:3}} component={Paper} elevation={10}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="center">Categories</TableCell>
                        <TableCell onClick={()=>handleSort("brand","text")} align="center">
                        <Box sx={flex} >
                          <div>Brands</div>
                          {toggle.brand ===1 && <UpgradeIcon />}
                          {toggle.brand !==1 && <VerticalAlignBottomIcon />}
                        </Box>
                       
                        </TableCell>
                        <TableCell align="center" onClick={()=>handleSort("name","text")}>
                        <Box sx={flex} >
                          <div>Name</div>
                          {toggle.name ===1 && <UpgradeIcon />}
                          {toggle.name !==1 && <VerticalAlignBottomIcon />}
                        </Box>
                        </TableCell>
                        <TableCell align="center" onClick={()=>handleSort("stock", "number")}>
                        <Box sx={flex} >
                          <div>Stock</div>
                          {toggle.stock ===1 && <UpgradeIcon />}
                          {toggle.stock !==1 && <VerticalAlignBottomIcon />}
                        </Box>
                        </TableCell>
                        <TableCell align="center">Operation</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sortedData.map((product,index) => (
                        <TableRow
                          key={product.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell align="center" component="th" scope="row">
                            {index+1}
                          </TableCell>
                          <TableCell align="center">{product.category}</TableCell>
                          <TableCell align="center">{product.brand}</TableCell>
                          <TableCell align="center">{product.name}</TableCell>
                          <TableCell align="center">{product.stock}</TableCell>
                          <TableCell align="center">
                            <DeleteIcon sx={globalHoverStyle}/>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody> 
                  </Table>
                </TableContainer>
              )} 
            
            </Box>

        </div>
  )
};

export default Products;

