import React, {useEffect}  from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import LoginPageImage from "../../Images/LoginPageImage.png"
import ReckittLogo from "../../Images/ReckittLogo.png"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleSubmit, handleUserInputChange } from './LoginSlice';


const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signIn = useSelector((state) => state.signIn);
    const loggedIn = signIn.loggedIn;
    const user = signIn.user;
    const email = user.email;
    const password = user.pwd;
    
    useEffect(()=> {
        if(loggedIn !== false ) navigate ('/landingpage')
    },[loggedIn])



  return (
    <Box padding={2}>
        <Box margin={2} width = {80} height={42} component='img' src={ReckittLogo} />
        <Grid 
        container spacing={2}
        rowSpacing = {0}
        height = '100%'
        margin = {4}
        >
            <Grid item xs = {6} height = '100%' padding={4}>
                <Box display={'flex'} textAlign={'center'} flexDirection ='column' alignItems='center' >
                    <Box margin={2} width = {300} height={350} component='img' src={LoginPageImage} />
                    <Typography padding={2} fontSize='18px' color='rgba(70, 89, 106, 1)' >Access Data from the Google Sheets using REST APIs. Further connect these APIs to your Business Report, Databricks Notebooks and much more. Find out more by logging in.</Typography>
                
                </Box>
            </Grid>

            <Grid item xs = {6} height = '100%' padding={4} >
                <Box borderRadius='8px' bgcolor='#FC007F' boxShadow='0px 0px 30px 0px rgba(0, 0, 0, 0.25)' height={452} width={453} justifyContent='space-between' textAlign='start' padding='1.5rem 2rem' display='flex' flexDirection='column' margin='0px 0px 0px 60px'  >
                    <Box>
                        <Typography variant='h5' color='primary.white' >Hi,</Typography>
                        <Typography variant='h5' color='primary.white' >Welcome back to Query Builder Portal!</Typography>
                    </Box>

                    <Box display='flex' flexDirection='column' >
                        <Box>
                            <TextField 
                                fullWidth 
                                type = 'email'
                                id = 'user-email' 
                                placeholder='userEmail'
                                required
                                size = 'small'
                                sx={{
                                    bgcolor : 'white.main',
                                    borderRadius : '7px'
                                }}
                                value= {email}
                                onChange = {(e)=> {
                                    dispatch(handleUserInputChange ({key: "email", value: e.target.value}))
                                }}
                                
                            />

                            <TextField 
                                fullWidth
                                type = 'password'
                                id = 'user-password' 
                                placeholder='Password'
                                required
                                size = 'small'
                                sx={{
                                    bgcolor : 'white.main',
                                    borderRadius : '7px',
                                    margin : '10px 0px'
                                }}
                                value= {password}
                                onChange = {(e)=> {
                                    dispatch(handleUserInputChange ({key: "pwd", value: e.target.value}))
                                }}
                            />  

                            <Button
                                type='submit'
                                variant = 'contained'
                                fullWidth
                                color="white"
                                sx ={{
                                    // bgcolor : 'white.main',
                                    boxShadow: 'none', 
                                    ":hover": { boxShadow: 'none' }

                                }}
                                onClick ={((e) =>{ 
                                    e.preventDefault()
                                    dispatch(handleSubmit()) 
                                    //() => navigate('\landingpage') login without auth
                                })}
                            >
                                Log In
                            </Button>

                        </Box>

                    </Box>
                </Box>
               
            </Grid>

        </Grid>
    
    </Box>
  )
}

export default LogIn


