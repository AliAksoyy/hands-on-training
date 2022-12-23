import * as React from 'react';
import Box from '@mui/material/Box';
import { flexCont } from '../../style/globalStyle';
import Modal from '@mui/material/Modal';
import {modalStyle} from "../../style/globalStyle"
import  TextField  from '@mui/material/TextField';
import { Button } from '@mui/material';
import useStockCalls from '../../hooks/useStockCalls';


export default function FirmModals({open,setOpen, info, setInfo}) {

    const {postFirm ,putFirms}=useStockCalls()
 
    const handleSubmit = (e) => {
            e.preventDefault()
            if(info.id) {
              putFirms(info)
            }else {
                postFirm(info)
            }
            setOpen(false)
            setInfo(null)
           
    }

    const handleChange = (e) => {
        setInfo({...info, [e.target.name]:e.target.value}) 

    }

  return (
    <div>
    
      <Modal
        open={open}
        onClose={()=> {setOpen(false);setInfo({})}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} >
        <Box component="form" onSubmit={handleSubmit} sx={flexCont}>
        <TextField 
            id="name" 
            fullWidth
            label="Firm Name" 
            variant="outlined"
            name="name"
            type="text"
            required
            value={info?.name || ""}
            onChange={handleChange}
            
             />
        <TextField 
            id="phone" 
            fullWidth
            label="Phone" 
            variant="outlined"
            name="phone"
            type="tel"
            required
            value={info?.phone || ""}
            onChange={handleChange}
             />
        <TextField 
            id="address" 
            fullWidth
            label="address" 
            variant="outlined"
            name="address"
            required
            type="text"
            value={info?.address || ""}
            onChange={handleChange}
             />
        <TextField 
            id="image" 
            label="Image" 
            fullWidth
            variant="outlined"
            required
            name="image"
            type="url"
            value={info?.image || ""}
            onChange={handleChange}
            
            
             />
             <Button fullWidth type="submit" variant="contained" size="large"> Submit</Button>
             </Box>
        </Box>
      </Modal>
    </div>
  );
}