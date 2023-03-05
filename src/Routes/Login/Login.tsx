import * as React from "react";
import styles from "../../styles";

import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import { Button } from "@mui/material";
import { UserInfo, UserLogin } from "../../Components/Api/Api";

import { useDispatch } from "react-redux";
import { SetUser } from "../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";
import { SetLoggedIn } from "../../Features/Redux/Slices/LoginSlice/LoginSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  return (
    <div style={styles.background}>
      <Header />
      <div style={styles.window}>
        <p style={styles.text_medium}>Login to Clip Notes</p>
        <div style={styles.flex_row}>
          <p style={styles.text_small}>Username</p>
          <div style={{ margin: 4 }} />
          <input
            style={styles.input_notetitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser({ ...user, username: e.target.value });
            }}
            maxLength={20}
          />
        </div>
        <div style={styles.flex_row}>
          <p style={styles.text_small}>Password</p>
          <div style={{ margin: 4 }} />
          <input
            style={styles.input_notetitle}
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser({ ...user, password: e.target.value });
            }}
            maxLength={20}
          />
        </div>
        <Button
          style={styles.button_green}
          variant="contained"
          onClick={async () => {
            setUser({
              username: "",
              password: "",
            });
            if (await UserLogin(user)) {
              await dispatch(SetLoggedIn());
              await dispatch(SetUser(await UserInfo()));
              navigate("/");
            } else {
              setError("Invalid Login");
            }
          }}
        >
          Login
        </Button>
        <p style={styles.text_small_red}>{error}</p>
        <Button
          style={styles.button_yellow}
          variant="contained"
          onClick={() => {
            navigate("/Register");
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
}
