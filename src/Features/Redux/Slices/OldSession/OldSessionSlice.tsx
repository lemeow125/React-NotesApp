import { createSlice } from "@reduxjs/toolkit";

export const OldSessionSlice = createSlice({
  name: "old_session_checked",
  initialState: {
    value: false,
  },
  reducers: {
    set_checked: (state) => {
      state.value = !state.value;
    },
  },
});

export const { set_checked } = OldSessionSlice.actions;

export default OldSessionSlice.reducer;
