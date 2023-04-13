import React from 'react'
import { Box, Typography, Button, FormControl, MenuItem, Select,TextField, } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add"
import { useDispatch, useSelector } from 'react-redux';
import { handleAddFilterModalClose } from './DetailsPreviewSlice';

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1146,
  height: 556,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  padding: 2,
}

const FilterModal = () => {
  const dispatch = useDispatch()
  const detailPreview = useSelector ((state) => state.detailPreview )
  const table_name = detailPreview.table_name;
  const filters = detailPreview.queryForm["filters"];
  const [addFilter, setAddFilter] = React.useState(false);
  const [addFilterColumn, setAddFilterColumn] = React.useState("");
  const handleAddFilterOpen = () => setAddFilter(true);
  const handleAddFilterClose = () => setAddFilter(false);
  const fixedColumns =
    table_name === "Products"
      ? detailPreview.fixedColumnsProducts
      : detailPreview.fixedColumnsCustomers;

  return (
    <Box bgcolor='white.main'  sx={style}  >
      <Box display='flex' justifyContent='space-between' >
        <Typography
          color = '#46596A'
          fontWeight='700'
          variant= 'h6'
        >
          Add Filters 
        </Typography>
        <CloseIcon 
          sx={{cursor:'pointer'}}
          onClick = {() => dispatch(handleAddFilterModalClose('cancel')) } 
        />
      </Box>  
      <Box display='flex' flexDirection='column' gap={2} >
        <Button
          sx={{
            width: "15%",
            justifyContent: "center",
            textTransform: "initial",
            boxShadow: "none",
            gap: "0.4rem",
            backgroundColor: "#46596A",
            "&:hover": { backgroundColor: "#46596A", boxShadow: "none" },
          }}
          variant="contained"
          size="small"
          onClick={handleAddFilterOpen}
        >
          {" "}
          <AddIcon fontSize="small" />
          <Typography color="white.main">Add New Row</Typography>
        </Button>  
      </Box>
    </Box>
  )
}

export default FilterModal