import { configureStore, combineReducers } from '@reduxjs/toolkit';
import signInReducer from '../Features/User/LoginSlice'
import sideBarReducer from '../Features/Sidebar/SidebarSlice';
import DetailPreviewReducer from '../Features/MainArea/DetailsPreviewSlice'

const rootReducer = combineReducers ({
    signIn: signInReducer,
    sidebar: sideBarReducer,
    detailPreview : DetailPreviewReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
})