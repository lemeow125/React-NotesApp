import * as React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { SetLoggedOut } from "../../Features/Redux/Slices/LoginSlice/LoginSlice";
import { UnsetUser } from "../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";

export interface user {
  LoggedInUser: {
    value: {
      email: string;
      id: number;
      username: string;
    };
  };
}

export default function LoginButton() {
  const dispatch = useDispatch();
  const logged_in = useSelector(
    (state: { Login: { logged_in: boolean } }) => state.Login.logged_in
  );
  const logged_in_user = useSelector((state: user) => state.LoggedInUser.value);
  const navigate = useNavigate();
  if (!logged_in) {
    return (
      <div style={styles.flex_row}>
        <p style={styles.text_small}>Not Logged in</p>
        <div style={{ margin: 4 }} />
        <Button
          style={styles.button_green}
          variant="contained"
          onClick={() => {
            navigate("/Login");
          }}
        >
          Login
        </Button>
      </div>
    );
  }
  return (
    <div style={styles.flex_row}>
      <p style={styles.text_small}>Logged in as {logged_in_user.username}</p>
      <div style={{ margin: 4 }} />
      <Button
        style={styles.button_red}
        variant="contained"
        onClick={() => {
          console.log("Logged out...");
          dispatch(SetLoggedOut());
          dispatch(UnsetUser());
          localStorage.setItem("token", "");
        }}
      >
        Logout
      </Button>
    </div>
  );
}
