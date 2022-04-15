// import { AppBar, Container, Toolbar, Box, IconButton, Button, Tooltip, Avatar, Menu, MenuItem } from "@mui/material";
// import { useState } from "react";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import logo from '../img/logo-white.png';
// import { AccountCircle } from "@mui/icons-material";
// import AuthButton from './AuthButton';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// export default function Appbar ({ login, logout, register, user}) {
//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handleLogout = () => {
//     console.log('Logging out ', user.email)
//     logout()
//     setAnchorElUser(null);
//   };

//   const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//       primary: {
//         main: '#1976d2',
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <AppBar position="static" color="primary">
//         <Container maxWidth="lg">
//           <Toolbar>
//             {/* LOGO  */}
//             <Box
//               component="img"
//               sx={{
//               height: 35,
//               }}
//               alt="Your logo."
//               src={ logo }
//             />
            
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   sx={{ my: 2, color: 'white', display: 'block' }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>
//             <AuthButton 
//               handleOpenUserMenu={(e)=>handleOpenUserMenu(e)} 
//               handleCloseUserMenu={()=>handleCloseUserMenu()}
//               handleLogout={()=>handleLogout()}
//               anchorElUser={anchorElUser}
//               login={()=>login()} 
//               logout={()=>logout()} 
//               user={user} />
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </ThemeProvider>
//   )
// }