import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useSelector} from "react-redux"
import { Info } from '@mui/icons-material';
import { flexColumn } from '../../styles/globalStyle';
import { TextField } from '@mui/material';
import useStockCalls from '../../hooks/useStockCalls';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PurchaseModal({open, setOpen, info, setInfo}) {

    const {firms, brands, products} = useSelector(state => state?.stock)
    const {putPurchase, postPurchase} = useStockCalls()

const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    if(name==="quantity" || name==="price"){
        setInfo({ ...info, [name]: Number(value) });
    }
    setInfo({...info, [name]: value})
  };

  console.log(info)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(info.id){
        putPurchase(info);
    }else{
        postPurchase(info)
    }
    setInfo({})
    setOpen(false)
  }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={()=> {setOpen(false); setInfo({})}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box component="form" sx={flexColumn} onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Firm</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                name="firm_id"
                value={info?.firm_id || ""}
                label="firms"
                onChange={handleChange}
                >
                {firms?.map((firm)=> (<MenuItem value={firm.id} key={firm.id}>{firm.name}</MenuItem>))}      
                </Select>
            </FormControl>

            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                name="brand_id"
                value={info?.brand_id || ""}
                label="brands"
                onChange={handleChange}
                >
                {brands?.map((brand)=> (<MenuItem value={brand.id} key={brand.id}>{brand.name}</MenuItem>))}      
                </Select>
            </FormControl>

            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                name="product_id"
                value={info?.product_id || ""}
                label="products"
                onChange={handleChange}
                >
                {products?.map((product)=> (<MenuItem value={product.id} key={product.id}>{product.name}</MenuItem>))}      
                </Select>
            </FormControl>

            <FormControl fullWidth>
            <TextField label="Quantity" type="number" id="quantity" name="quantity" value={info?.quantity || ""} onChange={handleChange}/>
            </FormControl>

            <FormControl fullWidth>
            <TextField label="Price" type="number" id="price" name="price" value={info?.price || ""} onChange={handleChange}/>
            </FormControl>

            <Button type="submit" variant="contained" fullWidth>Add New Purchase</Button>        
            </Box>
        </Box>
      </Modal>
    </div>
  );
}







  

  

