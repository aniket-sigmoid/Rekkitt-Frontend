import { configureStore } from '@reduxjs/toolkit';
import signInReducer from '../Features/User/LoginSlice'

export const store = configureStore({
    reducer: {
        signIn: signInReducer,
    },
})