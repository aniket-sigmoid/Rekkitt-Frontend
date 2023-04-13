import { configureStore, combineReducers } from '@reduxjs/toolkit';
import signInReducer from '../Features/User/LoginSlice'
import sideBarReducer from '../Features/Sidebar/SidebarSlice';
import DetailPreviewReducer from '../Features/MainArea/DetailsPreviewSlice'
import SavedQueryReducer from '../Features/MainArea/SavedQueriesSlice'

const rootReducer = combineReducers ({
    signIn: signInReducer,
    sidebar: sideBarReducer,
    detailPreview : DetailPreviewReducer,
    savedQuery: SavedQueryReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
})