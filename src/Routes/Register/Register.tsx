import * as React from "react";
import styles from "../../styles";

import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import { Button } from "@mui/material";
import { UserInfo, UserLogin } from "../../Components/Api/Api";

import { UserRegister } from "../../Components/Api/Api";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [feedback, setFeedback] = useState("");
  return (
    <div style={styles.background}>
      <Header />
      <div style={styles.window}>
        <p style={styles.text_medium}>Create an Account</p>
        <div style={styles.flex_row}>
          <p style={styles.text_small}>Email</p>
          <div style={{ margin: 4 }} />
          <input
            style={styles.input_notetitle}
            onChange={(e: { target: { value: any } }) => {
              setUser({ ...user, email: e.target.value });
            }}
            maxLength={20}
          />
        </div>
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
          style={styles.button_yellow}
          variant="contained"
          onClick={async () => {
            setUser({
              email: "",
              username: "",
              password: "",
            });
            if (await UserRegister(user)) {
              setFeedback(
                "Registration success. Please check your email address for activation"
              );
            } else {
              setFeedback("Invalid credentials specified");
            }
          }}
        >
          Register
        </Button>
        <p style={styles.text_small}>{feedback}</p>
      </div>
    </div>
  );
}
