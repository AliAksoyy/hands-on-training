
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Modal from '@mui/material/Modal';
import useStockCalls from '../../hooks/useStockCalls';

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

export default function ProductModal({open, setOpen, setInfo, info}) {
 
const {putProduct, postProduct} =useStockCalls()

        const handleSubmit = (e) => {
            e.preventDefault()
            if(info.id){
              putProduct(info)
            }else{
              postProduct(info)
            }
            setInfo({})
            setOpen(false)
            }
           
            
            console.log(info)

        
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
          <Select
            label="Category"
            id="category"
            name="category"
            type="text"
            variant="outlined"
            value={info?.category}
            onChange={handleChange}
          />
          <Select
            label="Brand"
             id="brand"
             type="text"
            name="brand"
            variant="outlined"
            value={info?.brand}
            onChange={handleChange}
          />
          <TextField
            label="Product Name"
             id="product"
             type="text"
            name="product"
            variant="outlined"
            value={info?.product}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" size="large">Save Brands</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
