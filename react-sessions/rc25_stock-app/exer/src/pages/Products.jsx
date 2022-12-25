
import { Typography, Box,Button,} from "@mui/material";
import {useEffect, useState} from "react"
import { useSelector } from "react-redux";
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
import { globalHoverStyle, select } from "../style/globalStyle";
import { flex } from "../style/globalStyle";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import useSortColumn from "../hooks/useSortColumn"
import {  MultiSelectBox,MultiSelectBoxItem} from '@tremor/react';
import ProductsModal from "../components/modals/ProductsModal";

const Products = () => {
  const {getProCatBrands,deleteProduct}= useStockCalls()
  const {products,brands} =useSelector((state)=>state.stock)

  console.log(products)
  useEffect(() => {
    getProCatBrands()
   },[])

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState([{
    name:"",
    category_id:"",
    brand_id:""
  }])

  const columObj={
    brand:1,
    name:1,
    stock:1
  }
  const [selectedBrands,setSelectedBrands]=useState([])

  const [selectedProducts,setSelectedProducts]=useState([])

  const {toggle, sortedData,handleSort} =useSortColumn(products,columObj)

  const isSelectedBrands=(item)=> selectedBrands.includes(item.brand) || selectedBrands.length===0

  const filteredProducts=products?.filter(item=>selectedBrands.includes(item.brand))

  const isSelectedProducts=(item)=>selectedProducts.includes(item.name) || selectedProducts.length===0

  return ( 
        <div>
            <Box>
              <Typography variant="h4" mb={4} color="error">
                Products
              </Typography>
              <Button variant="contained" mb={2} onClick={()=> setOpen(true)}>New Products</Button>
              <Box sx={select} mt={3}>
              <MultiSelectBox
                    handleSelect={ (item) => setSelectedBrands(item) }
                    placeholder="Select Brands"
                >
                    { brands?.map((item) => (
                        <MultiSelectBoxItem key={ item.name } value={ item.name } text={ item.name } />
                    )) }
                </MultiSelectBox>
                 <MultiSelectBox
                    handleSelect={ (item) => setSelectedProducts(item) }
                    placeholder="Select Products"
                >
                    { filteredProducts?.map((item) => (
                        <MultiSelectBoxItem key={ item.name } value={ item.name } text={ item.name } />
                    )) }
                </MultiSelectBox>   
                </Box>

                <ProductsModal info={info} setInfo={setInfo} setOpen={setOpen} open={open} />

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
                      {sortedData?.filter(item=>isSelectedBrands(item)).filter((item)=> isSelectedProducts(item))
                      ?.map((product,index) => (
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
                          <TableCell align="center" onClick={()=>deleteProduct(product.id)}>
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

