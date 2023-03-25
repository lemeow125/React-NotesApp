import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    value: false,
  },
  reducers: {
    Toggle_Login: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Toggle_Login } = LoginSlice.actions;

export default LoginSlice.reducer;
