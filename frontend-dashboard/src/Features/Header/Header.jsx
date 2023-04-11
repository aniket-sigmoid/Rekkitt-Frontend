import React, { useState } from 'react'
import { Box, Typography, AppBar, Toolbar, Tooltip, IconButton, Menu, MenuItem } from '@mui/material'
import ReckittLogo from '../../Images/ReckittLogo.png'
import PersonIcon from '@mui/icons-material/Person'
import { useDispatch  } from 'react-redux'
import {handleLogoutSubmit} from '../User/LoginSlice'


const Header = () => {
    const dispatch = useDispatch();
    const [anchorElUser, setanchorElUser] = useState(null);

    const handleOpenUserMenu = (e) => {
        setanchorElUser (e.currentTarget)
    }

    const hanndleCloseUserMenu = (e) => {
        setanchorElUser(null)
    }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{bgcolor:'white.main', boxShadow:"none"}} >
            <Toolbar >
                <Box margin={2} width = {80} height={42} component='img' src={ReckittLogo} />
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Typography 
                    variant="h6" 
                    component="a" 
                    href='/'
                    sx={{ 
                            flexGrow: 1,
                            color: 'text.main',
                            fontSize: '1rem',
                            textDecoration: "none",
                            fontWeight: 600,
                        }}>
                        Query Builder Portal
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <PersonIcon />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        open={Boolean(anchorElUser)}
                        onClose={hanndleCloseUserMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        
                    >
                        <MenuItem key="logout" onClick={()=>dispatch(handleLogoutSubmit())}>
                            <Typography textAlign="center" color='text.main'>Logout</Typography>
                        </MenuItem> 
                        
                    </Menu>
                </Box>

            </Toolbar>
      </AppBar>
    </Box>
  )
}



export default Header