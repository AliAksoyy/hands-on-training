import  Modal  from "@mui/material/Modal"
import  Box  from "@mui/material/Box"
import {modalStyle} from "../../style/globalStyle"
import  InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select  from "@mui/material/Select"
import Button  from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControl  from "@mui/material/FormControl"
import { useSelector } from "react-redux"


const ProductsModal=({open,setOpen,info,setInfo})=> {

    const {categories,brands}=useSelector(state=>state.stock)

   const handleChange=(e)=> {
    const {name,value}=e.target
    setInfo({...info, [name]:value})
   }

  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log("ali");
    console.log(info)
  }

    return (
        <Modal
            open={open}
            onClose={()=> setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <InputLabel id="category label">Categories</InputLabel>
                <Select
                        labelId="category label"
                        id="category"
                        name="category"
                        value={info?.category || ""}
                        label="Categories"
                        onChange={handleChange}
                        required
                >   
                    {categories?.map((item)=> 
                    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                    )}
                </Select>
             </FormControl>
             <FormControl fullWidth>
                <InputLabel id="brands label">Brands</InputLabel>
                <Select
                        labelId="brand label"
                        id="brand"
                        name="brand"
                        value={info?.brand || ""}
                        label="Categories"
                        required
                        onChange={handleChange}
                >   
                    {brands?.map((item)=> 
                    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                    )}
                </Select>
             </FormControl>
             <FormControl>
                <TextField
                label="Product Name*"
                id="name"
                name="name"
                required
                value={info?.name || ""}
                onChange={handleChange}
                 />
             </FormControl>
             <FormControl>
                <Button variant="contained" type="submit" size="large">Add New Product</Button>
             </FormControl>
            </Box>
        </Modal>
    )
}

export default ProductsModal