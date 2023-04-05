import {createSlice} from '@reduxjs/toolkit'
// import axios from 'axios'
// we need axios to make http requests from frontend (like in this case of authentication) to backend

const initialState = {
    loggedIn: false,
    user:{
        email:"",
        pwd:""
    }
}

const userEmail = "aniket@don"
const userPassword = "don" 

const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        handleUserInputChange: (state, action) => {
            const { key, value } = action.payload;
            state.user[key] = value;
        },
        handleSubmit: (state, action) =>{
            if(state.user.email===userEmail && state.user.pwd=== userPassword){
                console.log("You are logged In");
                state.loggedIn = true;
            }
            else{
                console.log("logout")
                state.loggedIn = false;
            }
        },
        handleLogoutSubmit: (state,action) => {
            state.loggedIn = false;
            state.user["email"]="";
            state.user["pwd"]="";
        }
    }
})

export const { handleUserInputChange, handleSubmit, handleLogoutSubmit  } = signInSlice.actions;
export default signInSlice.reducer


