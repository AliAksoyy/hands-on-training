import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {useAuthContext} from "../context/ProviderAuth"
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/auth"
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Register() {

  const {user,setUser}=useAuthContext()
  
  const [info,setInfo]=React.useState({})
  const navigate=useNavigate()
  const signUp=(email,password)=> {

  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const kullanici = userCredential.user;
    
  })
  .catch((error) => {
   
    console.log(error.message)
    console.log(error.code)
  });

  }

  const handleChange=(e)=> {
    setInfo({...info, [e.target.id]:e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(user.email===info.email){
      alert("Zaten böyle kullanıcı var başka kullanıcı ile giriş yapın")
    }
    signUp(info.email,info.password)
    
    document.querySelector("#success").innerText="Tebrikler kayıt oldunuz ve home page'ne yönlendiriliyorusunuz"
    setTimeout(()=> {
      navigate("/")
    },2000)
    setUser({...user, email:info.email, password:info.password})
    
   setInfo({})
  };



  return (
    
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Typography id="success" className="text-danger mt-2" component="h1" variant="h5">
              
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="dense"
                required
                fullWidth
                type="text"
                id="firstname"
                label="First Name"
                name="firstname"
                autoFocus
                value={info.firstname || ""}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoFocus
                value={info.lastname || ""}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={info.email || ""}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={info.password || ""}
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container sx={{textAlign:"center"}}>
                <Grid item xs >
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
   
  );
}