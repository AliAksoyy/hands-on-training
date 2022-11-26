
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useSelector } from "react-redux";
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

export default function ProductModal({open,setOpen, setInfo, info}) {
 
 const {putProduct, postProduct} =useStockCalls()
const {categories,brands}=useSelector(state=>state.stock)




        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(info)
            if(info.id){
              putProduct(info)
            }else{
              postProduct(info)
            }
            setInfo({})
            setOpen(false)
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
        <FormControl fullWidth>
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
            label="Category"
            id="category"
            name="category"
            type="text"
            variant="outlined"
            value={info?.category_id || ""}
            onChange={handleChange}
        >
          
         {categories?.map((category)=> (
          <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
         ) )}
          
        </Select>
      </FormControl>
        <FormControl fullWidth>
        <InputLabel id="demo-controlled-open-select-label">Brands</InputLabel>
        <Select
            label="Brands"
            id="brands"
            name="brands"
            type="text"
            variant="outlined"
            value={info?.brands_id || ""}
            onChange={handleChange}
        >
        {brands?.map((brand)=> 
          <MenuItem key={brand.id} value={brand.name}>{brand.name}</MenuItem>
        )}
         
        
        </Select>
      </FormControl>
         
          <TextField
            label="Product Name"
             id="product"
             type="text"
            name="product"
            variant="outlined"
            value={info?.name|| ""}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" size="large">Save Brands</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
