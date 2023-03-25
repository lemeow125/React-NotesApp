import * as React from "react";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfo } from "../Api/Api";
import { Toggle_Login } from "../../Features/Redux/Slices/LoginSlice/LoginSlice";
import { SetUser } from "../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";
import { set_checked } from "../../Features/Redux/Slices/OldSession/OldSessionSlice";
import { RootState } from "../../Features/Redux/Store/Store";
export default function PreviousSessionChecker() {
  const dispatch = useDispatch();
  const logged_in = useSelector((state: RootState) => state.logged_in.value);
  // Function to check for previous login session
  const check = useCallback(async () => {
    if (await UserInfo()) {
      if (logged_in !== true) {
        console.log("Previous session found. Restoring");
        await dispatch(Toggle_Login());
        await dispatch(SetUser(await UserInfo()));
      }
    } else {
      console.log("No old session found");
      localStorage.removeItem("token");
    }
    await dispatch(set_checked());
  }, [dispatch, logged_in]);
  useEffect(() => {
    if (!logged_in) {
      check();
    }
  }, [check, logged_in]);
  return <div />;
}
