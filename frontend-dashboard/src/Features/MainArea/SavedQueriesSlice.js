import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    align : "left"
}

const savedQuerySlice = createSlice({
    name:"savedQuery",
    initialState,
    reducers : {

    }

}) 

export default savedQuerySlice.reducer;