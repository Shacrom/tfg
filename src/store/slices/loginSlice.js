export { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    logged: false,
    userName: "",
    token: "",
  },
  reducers: {
    loggin: (state, action) => {
      state.logged = true;
      state.userName = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions

