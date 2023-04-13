import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, FormControl, TextField, Typography, InputAdornment, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:"#E6E8ED" ,
    color: "#465A69",
    fontSize: 16,
    fontWeight: 800,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 500,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(QueryName, CreatedOn, LastQueriedOn, RequestType) {
  return { QueryName, CreatedOn, LastQueriedOn, RequestType };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SavedQueries() {

  const [alignment, setAlignment] = React.useState("List")
  const handleAlignment = (event, newAlignment) => {
    if(newAlignment!==null)
    setAlignment(newAlignment) 
  }

  const [searched, setSearched] = React.useState ("")
  const [Datarows, setDataRows] = React.useState(rows)
  //rows is an array of objects

  const searchTable = (searchText)  => { 

      if(searchText === '') {setDataRows(() => rows)
        console.log("Empty search string")
      }
      else {
        const filteredRows = rows.filter((row)=> {
          console.log((row[0]))
          return row.QueryName.toLowerCase().includes(searchText.toLowerCase())
        })
        console.log(filteredRows)
        setDataRows(()=>filteredRows)
      }
  }

  return (
    <Box display='flex' flexDirection='column' margin="1rem 1rem 1rem 1rem"  sx={{width:1}}>
      <Typography variant='h5' color='text.main' fontWeight='600'  >
        Saved Queries 
      </Typography>
      <Box 
        display='flex'
        marginBottom='1.5rem'
        marginTop='1rem'
        justifyContent='space-between'
      >
        <FormControl >
          <TextField
            required
            placeholder='Search'
            size='small'
            sx= {{ backgroundColor: "#F6F6F6", width:'400px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start' size='small'>
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
            value={searched}
            onInput={(e)=>{searchTable(e.target.value)}} 
            onChange={(e)=>{setSearched(()=>e.target.value)}}
          >
          </TextField>
        </FormControl>
        <Box display='flex' gap='1rem' >
        <Button
            sx={{
              justifyContent: "start",
              textTransform: "initial",
              boxShadow: "none",
              gap: "0.4rem",
              backgroundColor: "#46596A",
            }}
            variant="contained"
            size="small"
          >
            <Typography color="white.main">Filters</Typography>
            <FilterAltIcon fontSize="small" />
          </Button>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            color="primary"
            size="small"
          >
            <ToggleButton
              value="List"
              sx={{
                backgroundColor: "#46596A",
                color: "white.main",
                ":hover": { color: "black" },
              }}
              aria-label="left button active"
            >
              <ListIcon />
            </ToggleButton>
            <ToggleButton
              value="Grid"
              sx={{
                backgroundColor: "#46596A",
                color: "white.main",
                ":hover": { color: "black" },
              }}
              aria-label="right button active"
            >
              <GridViewIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <TableContainer component={Paper} > 
        <Table sx={{ minWidth: 700 }} >
          <TableHead>
            <TableRow>
              <StyledTableCell>Query Name</StyledTableCell>
              <StyledTableCell align="center">Created On</StyledTableCell>
              <StyledTableCell align="center">Last Queried On</StyledTableCell>
              <StyledTableCell align="center">Request Type</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Datarows.map((row) => (
              <StyledTableRow key={row.QueryName}>
                <StyledTableCell > {row.QueryName} </StyledTableCell>
                <StyledTableCell align="center">{row.LastQueriedOn}</StyledTableCell>
                <StyledTableCell align="center">{row.CreatedOn}</StyledTableCell>
                <StyledTableCell align="center">{row.RequestType}</StyledTableCell>
                <StyledTableCell align="right"> < MoreVertIcon /> </StyledTableCell>
              </StyledTableRow>
            )) 
          }  
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
