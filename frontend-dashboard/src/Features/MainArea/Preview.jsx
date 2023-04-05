import React from 'react'
import {Box, Button , Typography} from '@mui/material'
import PreviewImg from '../../Images/PreviewImg.png'
import { useDispatch } from 'react-redux'
import { handleLoad } from './DetailsPreviewSlice'

const Preview = () => {
  const dispatch = useDispatch()

  return (
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' >
      <Box component='img' src={PreviewImg} width='281px' height='361px' />
      <Button 
        color='text.main'
        variant= 'contained'
        boxShadow = 'none'
        sx = {{
          justifyContent:'start',
          textTransform : 'initial',
          ':hover' : {bgcolor: 'text.main', boxShadow:'none' }
        }}
        onclick = {() => dispatch(handleLoad())}
      >
        <Typography color="white.main">Load Data</Typography>
      </Button>
    </Box>
  )
}

export default Preview