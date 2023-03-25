import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../Slices/LoginSlice/LoginSlice";
import LoggedInUserReucer from "../Slices/LoggedInUserSlice/LoggedInUserSlice";
import OldSessionReducer from "../Slices/OldSession/OldSessionSlice";

const store = configureStore({
  reducer: {
    logged_in: LoginReducer,
    logged_in_user: LoggedInUserReucer,
    old_session_checked: OldSessionReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
