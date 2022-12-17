import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {useAuth} from "../context/AuthcontextProvider"

export default function Navbar() {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const {currentUser} =useAuth()
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar sx={{backgroundColor:"#044354"}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <Box
                component="img"
                sx={{width: 35}}
            alt="The house from the offer."
            src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-10.png"
             />
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: {sm:"none",md:"block"},"& span":{fontSize:"30", color:"wheat"}}}>
            <span>Ali Aksoy Blog</span>
          </Typography>
          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{fontSize:"2rem"}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}