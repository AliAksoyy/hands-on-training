import * as React from 'react';
import Box from '@mui/material/Box';
import { flexCont } from '../../style/globalStyle';
import Modal from '@mui/material/Modal';
import {modalStyle} from "../../style/globalStyle"
import  TextField  from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function FirmModals({open,setOpen, info, setInfo}) {
 
    const handleSubmit = (e) => {
            e.preventDefault()
            console.log(info)
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
            value={info?.name}
            onChanege={(e)=> {setInfo({...info, [e.target.name]:e.target.value })}}
            
             />
        <TextField 
            id="name" 
            label="Firm Name" 
            variant="outlined"
            name="name"
            type="text"
            value={info?.name}
            onChanege={(e)=> {setInfo({...info, [e.target.name]:e.target.value })}}
            
             />
        <TextField 
            id="name" 
            label="Firm Name" 
            variant="outlined"
            name="name"
            type="text"
            value={info?.name}
            onChanege={(e)=> {setInfo({...info, [e.target.name]:e.target.value })}}
            
             />
        <TextField 
            id="name" 
            label="Firm Name" 
            variant="outlined"
            name="name"
            type="text"
            value={info?.name}
            onChanege={(e)=> {setInfo({...info, [e.target.name]:e.target.value })}}
            
             />
             <Button type="submit" variant="contained"> Submit</Button>
             </Box>
        </Box>
      </Modal>
    </div>
  );
}