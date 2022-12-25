import { Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField} from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useStockCalls from '../../hooks/useStockCalls'
import { modalStyle } from '../../style/globalStyle'

const SalesModal = ({info,setInfo,open,setOpen}) => {

    const {getBrands,getProducts,postSale,putSale}=useStockCalls()

    useEffect(()=>{
        getBrands()
        getProducts()
    },[])

    const {brands,products}=useSelector(state=>state.stock)
   

    const handleChange=(e)=>{
        setInfo({...info, [e.target.name]:Number(e.target.value)})
    }

    const handleSubmit=(e)=> {
        e.preventDefault()
        if(info.id){
        putSale(info)
        }
       else{
        postSale(info)
       }
        setOpen(false)
        setInfo({})
         
    }
  
  return (
  
        <Modal
        open={open}
        onClose={()=>{setOpen(false);setInfo({})}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="brand_id"
                value={info?.brand_id || ""}
                label="Brand"
                required
                onChange={handleChange}
            >
            {brands?.map((item)=> {
               return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
            })}
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="product_id"
                value={info?.product_id || ""}
                label="Product"
                required
                onChange={handleChange}
            >
            {products?.map((item)=> {
               return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
            })}
            </Select>
        </FormControl>
        <TextField fullWidth id="outlined-basic"  name="quantity" label="Ouantity*" type="number" variant="outlined" value={Number(info?.quantity) || ""} onChange={handleChange} required/>
        <TextField fullWidth id="outlined-basics" type="text" name="price" label="Price*" variant="outlined" value={info?.price || ""} onChange={handleChange} required/>
        <Button type="submit" size="large" variant="contained" >Add New Sale</Button>
        </Box>
        </Modal>
  )
}

export default SalesModal
