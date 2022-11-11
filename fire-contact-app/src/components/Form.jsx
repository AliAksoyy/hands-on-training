
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button  from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';


const Form = ({addUser}) => {

    const [users, setUsers] = useState({
        username:"",
        phone:"",
        gender:""
    });
    const {username,phone,gender}=users


        const handleSubmit = (e)=> {
            e.preventDefault()
            addUser(username,phone,gender)
            console.log("aliiids")
            console.log(users);
        }


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
                        name="username"
                        label="name"
                        id="input-with-icon-adornment"
                            startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                           
                        }
                        onChange={(e)=> setUsers({...users, username:e.target.value})}
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
                        onChange={(e)=> setUsers({...users, phone:e.target.value})}
                        

                    />
                            <FormControl sx={{width:"14rem"}}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Gender
                                </InputLabel>
                                <NativeSelect
                                 onChange={(e)=> setUsers({...users, gender:e.target.value})}
                                

                                defaultValue={30}
                                inputProps={{
                                    name: 'gender',
                                    id: 'uncontrolled-native',
                                }}
                                >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unisex">Unisex</option>
                                
                                </NativeSelect>
                            </FormControl>
                            <Button onClick={handleSubmit} margin="normal" sx={{width:"14rem"}} variant="contained" color="success">Add</Button>
                    
                    </Box>
                

        </div>
    </div>
  )
}

export default Form