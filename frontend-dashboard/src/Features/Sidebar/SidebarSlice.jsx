import { createSlice } from '@reduxjs/toolkit';

const initailState = {
  toggle : true
}

const SidebarSlice  = createSlice({
  name:'sidebar',
  initailState,
  reducers : {
    handleToggleQueryData : (state, action) => {
      state.toggle = true
    },
    handleToggleSavedData : (state, action) => {
      state.toggle = false
    }
  }

})

export const { handleToggleSavedData,handleToggleQueryData } = SidebarSlice.actions
export default SidebarSlice.reducer

