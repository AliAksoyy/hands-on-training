import React from 'react'
import { modalStyle } from '../../style/globalStyle'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import  TextField  from '@mui/material/TextField';
import useStockCalls from '../../hooks/useStockCalls';

const BrandModal = ({open,setOpen,info,setInfo}) => {


    const {postBrand,putBrand}=useStockCalls()

    const handleChange=(e)=> {
        const {name,value}=e.target
        setInfo({...info, [name]:value})
    }
    console.log(info)

    const handleSubmit=(e)=> {
        e.preventDefault()
        if(info.id){
            putBrand(info)
        }else{
        postBrand(info)
        }
        setInfo({})
        setOpen(false)

    }

  return (
    <Modal
    open={open}
    onClose={()=> {setOpen(false)}}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
      <TextField
        label="Brand Name"
        type="text"
        name="name"
        id="brand"
        required
        fullWidth
        value={info.name || ""}
        onChange={handleChange}
        
      />
      <TextField
        label="Image Url"
        type="url"
        name="image"
        id="url"
        required
        fullWidth
        value={info.image || ""}
        onChange={handleChange}
        
      />
      <Button variant="contained" type="submit">Save Brand</Button>
    </Box>
  </Modal>
  )
}

export default BrandModal