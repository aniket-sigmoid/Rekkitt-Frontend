import React from 'react'
import { Typography, Box } from '@mui/material'

const Footer = () => {
  return (
    <Box bgcolor='rgba(70, 89, 106, 1)' display='flex' >
        <Typography alignSelf='center' color='white.main' variant='subtitle2' margin='auto' >  
            Copyright &copy;2022. Powered by RBOne
        </Typography>
    </Box>
  )
}

export default Footer