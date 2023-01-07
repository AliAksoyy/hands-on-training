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
import { useAuthContext } from '../context/ProviderAuth';
import {signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
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

export default function Login() {
 const navigate=useNavigate()
  const [info,setInfo]=React.useState({})
  



  const handleChange=(e)=> {
    setInfo({...info, [e.target.id]:e.target.value})
  }

  const signIn=(email,password)=> {
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      
        const myuser = userCredential.user;
        if(myuser){
          navigate(-1)
        }
      })
      .catch((error) => {
       if(window.confirm("Wrong Email or Password! If you haven't been registerd yet, Please Register!")){
          navigate("/register")
       }
        console.log(error.code)
        console.log(error.message)
        
      });
  }
  const handleGoogle=()=> {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
   
    const myuser = result.user;
   if(myuser){
    navigate(-1)
   }
  }).catch((error) => {
    console.log(error.code)
    console.log(error.message)
  });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(info.email,info.password)
    setInfo({})
    
  };

  return (
    
      <Grid container component="main" sx={{ height: '89.1vh' }}>
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
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                Login
              </Button>
              <Button
              onClick={handleGoogle}
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Google with Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
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