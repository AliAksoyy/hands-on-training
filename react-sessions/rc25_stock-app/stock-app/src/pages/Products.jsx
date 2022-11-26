import { Box, Button, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStockCalls from "../hooks/useStockCalls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import ProductModal from "../components/modals/ProductModal";



const Products = () => {

  const [open,setOpen]=useState(false)
  const [info,setInfo]=useState({})

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  console.log(info)

  const [toogle, setToogle] =useState({
    brand:false,
    name:false,
    stock:false
  })
  console.log(toogle)
  const {getProducts, getBrands, getCategories}=useStockCalls()
  const {products}=useSelector(state=>state.stock)

//  console.log(products);
//  console.log(category);
// console.log(brands);


useEffect(()=>{
  getProducts()
  getBrands()
  getCategories()
},[])



const handleSort = (arg) => {
  setToogle({...toogle, [arg]: !toogle[arg]})
}



  return (
      <Box>
        <Typography variant="h4" my={4} color="error">
          Products
        </Typography>
        <Button variant="contained" sx={{marginBottom:"4rem"}} onClick={()=> {setOpen(true); setInfo({})}} >New Product</Button>

        <ProductModal setInfo={setInfo} info={info} open={open} setOpen={setOpen} />

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} elevation={10}>
             
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{"&:hover":{color:"red"}, cursor:"pointer"}}>#</TableCell>
                <TableCell align="center" sx={{"&:hover":{color:"red"}, cursor:"pointer"}}>Category</TableCell>
                <TableCell align="center">
                <Box sx={{display:"flex", gap:1, justifyContent:"center", cursor:"pointer", "&:hover":{color:"red"}}} onClick={()=>handleSort("brand", "text")}>
                    <div>Brand</div>
                    {toogle.brand &&  <UpgradeIcon /> }
                    {!toogle.brand && <VerticalAlignBottomIcon /> }
                    
                  </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={{display:"flex", gap:1, justifyContent:"center", cursor:"pointer", "&:hover":{color:"red"}}} onClick={()=>handleSort("name","text")}>
                    <div>Name</div>
                    {toogle.name &&  <UpgradeIcon /> }
                    {!toogle.name && <VerticalAlignBottomIcon /> }
                  </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={{display:"flex", gap:1, justifyContent:"center", cursor:"pointer", "&:hover":{color:"red"}}} onClick={()=>handleSort("stock","number")}>
                    <div>Stock</div>
                    {toogle.stock &&  <UpgradeIcon /> }
                    {!toogle.stock && <VerticalAlignBottomIcon /> }
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
