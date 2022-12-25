import { Box, FormControl, MenuItem, Modal, Select,InputLabel, TextField, Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useStockCalls from '../../hooks/useStockCalls'
import { modalStyle } from '../../style/globalStyle'

const PurchasesModal = ({open,setOpen,info,setInfo}) => {

    const {getFirms,getBrands,getProducts}=useStockCalls()
    useEffect(()=>{
        getFirms()
        getBrands()
        getProducts()
    },[])

    const {firms,brands,products}=useSelector(state=>state.stock)

    const handleChange=(e)=> {
        const {name,value}=e.target
        setInfo({...info, [name]:Number(value)})
    }

    const handleSubmit=(e)=> {
        e.preventDefault()
        console.log(info);
    }

  return (
    <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Firm</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="firm_id"
                value={info?.firm_id || ""}
                label="firm"
                onChange={handleChange}
                required>   
                
                {firms?.map((item)=> <MenuItem value={item.id}>{item.name}</MenuItem>)}
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="brand_id"
                value={info?.brand_id || ""}
                label="brand"
                onChange={handleChange}
                required>   

                {brands?.map((item)=> <MenuItem value={item.id}>{item.name}</MenuItem>)}
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="product_id"
                value={info?.product_id || ""}
                label="Age"
                onChange={handleChange}
                required>   

                {products?.map((item)=> <MenuItem value={item.id}>{item.name}</MenuItem>)}
            </Select>
            </FormControl>
            <TextField fullWidth label="Quantity" name="quantity" value={info?.quantity || ""} onChange={handleChange} required  />
            <TextField fullWidth label="Price" name="price" value={info?.price || ""} onChange={handleChange} required  />
            <Button fullWidth variant="contained" type="submit" >Add New Purchases</Button>
        
        </Box>
    </Modal>
  )
}

export default PurchasesModal