import React from 'react'
import { Navigate } from 'react-router-dom'
import {Box, Grid} from '@mui/material'
import {useSelector} from 'react-redux'
import DetailsPreview from '../MainArea/DetailsPreview'
import SavedQueries from '../MainArea/SavedQueries'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

function LandingPage() {
  const signIn = useSelector ((state) => state.signIn )
  const loggedIn = signIn.loggedIn;


  if(loggedIn) {
    return (
        <Box>
          <Grid
            container
            rowSpacing={0}
            height = '100%'
          >
            <Grid item xs={12} borderBottom= '1px solid gray' >
              <Header/>
            </Grid>
            <Grid item xs={2} sm={2} height='100%'  >
              <Sidebar/>
            </Grid>
            <Grid item xs={10} sm ={10} height='100%' borderLeft='1px solid gray' display='flex' flexDirection='row' >
              <DetailsPreview/>
            </Grid>
            <Grid item xs={12} >
              <Footer/>
            </Grid>

          </Grid>

        </Box>
      )
  }
  else {
    return (<Navigate replace to ='/' />);
  }
  
}

export default LandingPage