import React from 'react'
import { Box, Typography, Button,} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import Save from './save'
import Download from './Download'
import Preview from './Preview'
import LoadData from './LoadData'
import TableForm from './TableForm' 
import { handleDetail, handlePreview } from './DetailsPreviewSlice'

const Details = () => {
  const detailPreview = useSelector((state) => state.detailPreview);
  const details = detailPreview.details;
  const load = detailPreview.load;
  const dispatch = useDispatch()

  return (
    <Box display="flex" flexDirection="column" minHeight="90vh" gap="1.5rem" width="100%" margin="0px 20px 0px 20px">
      
      <Box display='flex'  marginTop='6px' >
        <Button
          sx = {{
            justifyContent:'start',
            boxShadow: 'none', 
            textTransform : 'initial',
            ":hover": { boxShadow: 'none' }
          }}
          color={details === true ? "text" : "white"}
          variant = 'text'
          onClick={() => dispatch(handleDetail())}
        >
          <Typography color={details ? 'text.main' : 'white.main'}>Details</Typography>
        </Button>
        <Button
          sx = {{
            justifyContent:'start',
            textTransform : 'initial',
            boxShadow: 'none', 
            ":hover": { boxShadow: 'none' }
          }}
          color={details? "secondary" : "text"}
          variant = 'text'
          onClick={() => dispatch(handlePreview())} 
        >
          <Typography color={details === true ? 'text.main' : 'white.main'}>Preview</Typography>
        </Button>
      </Box>
      
      {details ? <TableForm /> : load ? <LoadData /> : <Preview />}
      {detailPreview.download === "true" ? <Download /> : null}
      {detailPreview.save ? <Save /> : null}

    </Box>
  )
}

export default Details