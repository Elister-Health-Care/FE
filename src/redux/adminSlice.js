import { createSlice } from '@reduxjs/toolkit'

const adminSlice = createSlice({
   name: 'admin',
   initialState: {
      keyAdminUpdated: 1,
   },
   reducers: {
      updateAdmin: (state) => {
         state.keyAdminUpdated += 1
      },
   },
})

export const { updateAdmin } = adminSlice.actions

export default adminSlice.reducer
