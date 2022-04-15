import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Nav } from "react-bootstrap";
import { AccountCircle } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function AuthButton (props) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    console.log('Logging out ', props.user.email)
    props.logout()
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  if (props.user) {
    return (
      <ThemeProvider theme={darkTheme}> 
      <Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <AccountCircle fontSize="large" />
        </IconButton>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem key='Profile' onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem key='Account' onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Account</Typography>
          </MenuItem>
          <MenuItem key='Logout' onClick={handleLogout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
      </ThemeProvider>
    )
    // return <Button>Logout</Button>;
  } else {
    // return <Button onClick={props.login}>Login</Button>;
    return (
      <Nav>
        <Nav.Link onClick={props.login}>Sign In</Nav.Link>
        <Nav.Link onClick={props.register}>Register</Nav.Link>
      </Nav>
    )
  }
};