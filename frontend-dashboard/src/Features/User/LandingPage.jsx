import React from 'react'
import { Navigate } from 'react-router-dom'
import {Box, Grid} from '@mui/material'
import {useSelector} from 'react-redux'
import Details from '../MainArea/Details'
import SavedQueries from '../MainArea/SavedQueries'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

function LandingPage() {
  const signIn = useSelector ((state) => state.signIn )
  const loggedIn = signIn.loggedIn;
  const sideBar = useSelector ((state) => state.sidebar)
  const toggle = sideBar.toggle


  if(loggedIn) {
    return (
        <Box >
          <Grid
            container
            rowSpacing={0}
            // minHeight = '100%'
          >
            <Grid item xs={12} md= {12} borderBottom= '1px solid gray' >
              <Header/>
            </Grid>
            <Grid item xs={2} sm={2} md={2} height='100%' borderRight='1px solid gray' minHeight='88vh'>
              <Sidebar/>
            </Grid>
            <Grid item xs={10} sm ={10} md={10} height='100%'  display='flex' flexDirection='row'  >
              {toggle ? <Details /> : <SavedQueries />}
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