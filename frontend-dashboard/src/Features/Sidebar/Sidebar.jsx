import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import { handleToggleQueryData, handleToggleSavedData } from './SidebarSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar)
  const toggle = sidebar.toggle

  return (
    <Box display='flex' flexDirection='column' gap = '1rem' >
      <Box display='flex' gap='0.5rem' padding='0 0.5rem' color='secondary.main'>
          <MenuIcon color='secondary' sx={{ cursor: 'pointer' }} />
          <Typography color='secondary'>Menu</Typography>
      </Box>
      <Box display='flex' flexDirection='column' gap = '1rem'> 
        <Button
          sx = {{
            justifyContent:'start',
            boxShadow: 'none', 
            ":hover": { boxShadow: 'none' }
          }}
          color={toggle ? 'btnColor' : 'text'}
          variant = 'contained'
          startIcon={<LibraryAddIcon color={toggle ? 'text' : 'white'} />}
          onClick={() => dispatch(handleToggleQueryData())}
        >
          <Typography color={toggle ? 'text.main' : 'white.main'}>Query Data</Typography>
        </Button>
        <Button
           sx = {{
            justifyContent:'start',
            boxShadow: 'none', 
            ":hover": { boxShadow: 'none' }
          }}
          color={toggle ? "white" : 'btnColor'}
          variant = 'contained'
          startIcon={<LibraryBooksIcon color={toggle ? 'secondary' : 'text'} />}
          onClick={() => dispatch(handleToggleSavedData())}
        >
          <Typography color={toggle ? 'secondary' : 'text.main'}>Saved Data</Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Sidebar

