import * as React from "react";
import styles from "../../styles";

import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import { Button } from "@mui/material";
import { UserLogin } from "../../Components/Api/Api";

export default function Login() {
  const navigate = useNavigate();
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
            onChange={(e: { target: { value: any } }) => {
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
            onChange={(e: { target: { value: any } }) => {
              setUser({ ...user, password: e.target.value });
            }}
            maxLength={20}
          />
        </div>
        <Button
          style={styles.button_green}
          variant="contained"
          onClick={async () => {
            if (await UserLogin(user)) {
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
