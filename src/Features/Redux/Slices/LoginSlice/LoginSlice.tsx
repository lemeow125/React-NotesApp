import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    value: false,
  },
  reducers: {
    SetLoggedIn: (state) => {
      state.value = !state.value;
    },
    SetLoggedOut: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SetLoggedIn, SetLoggedOut } = LoginSlice.actions;

export default LoginSlice.reducer;
