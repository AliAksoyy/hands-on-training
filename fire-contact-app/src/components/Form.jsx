
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button  from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';

import NativeSelect from '@mui/material/NativeSelect';


const Form = () => {




  return (
    <div style={{width:"17rem"}}>
        <h1 className='fs-3 border border-3 bg-light my-5 text-center '>CONTACTS</h1>
        <h1 className='fs-3 border border-3 bg-light my-3 text-center'>ADD CONTACTS</h1>
        <div className='text-center mt-5 p-2' style={{backgroundColor:"white", height:"44vh"}}>

                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Name
                        </InputLabel>
                        <Input
                        label="name"
                        id="input-with-icon-adornment"
                            startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        }
                        />
                        
  
                    </FormControl>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Phone Number"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                    />
                            <FormControl sx={{width:"14rem"}}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Gender
                                </InputLabel>
                                <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'gender',
                                    id: 'uncontrolled-native',
                                }}
                                >
                                <option value={10}>Male</option>
                                <option value={20}>Female</option>
                                <option value={30}>Unisex</option>
                               
                                </NativeSelect>
                            </FormControl>
                            <Button margin="normal" sx={{width:"14rem"}} variant="contained" color="success">Add</Button>
                    
                    </Box>
                

        </div>
    </div>
  )
}

export default Form