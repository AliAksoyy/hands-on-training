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
        onClose={()=> setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
        <Box sx={flexCont}>
        <TextField 
            id="name" 
            label="Firm Name" 
            variant="outlined"
            name="name"
            type="text"
            value={info?.name || ""}
            onChange={handleChange}
            
             />
        <TextField 
            id="phone" 
            label="Phone" 
            variant="outlined"
            name="phone"
            type="tel"
            value={info?.phone || ""}
            onChange={handleChange}
            
            
             />
        <TextField 
            id="address" 
            label="address" 
            variant="outlined"
            name="address"
            type="text"
            value={info?.address || ""}
            onChange={handleChange}
            
            
             />
        <TextField 
            id="image" 
            label="Image" 
            variant="outlined"
            name="image"
            type="url"
            value={info?.image || ""}
            onChange={handleChange}
            
            
             />
             <Button type="submit" variant="contained"> Submit</Button>
             </Box>
        </Box>
      </Modal>
    </div>
  );
}