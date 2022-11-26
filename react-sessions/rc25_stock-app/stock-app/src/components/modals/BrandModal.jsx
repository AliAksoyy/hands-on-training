
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { TextField } from '@mui/material';

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

export default function BrandModal({open, setOpen, setInfo, info}) {
 

        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(info)
        }
    const handleChange = (e) => {
        const {name,value}=e.target
        setInfo({...info, [name]:value})
    }
  

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleSubmit} sx={style}>
        <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
          <TextField
            label="Brand Name"
            id="name"
            name="name"
            type="text"
            variant="outlined"
            value={info?.name}
            onChange={handleChange}
          />
          <TextField
            label="Image URL"
             id="image"
             type="url"
            name="image"
            variant="outlined"

            value={info?.image}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" size="large">Save Brands</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
