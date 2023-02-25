import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "../../styles";

export default function LoginButton() {
  const [logged_in, setLoggedIn] = useState(false);
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
      <p style={styles.text_small}>Logged in as</p>
      <div style={{ margin: 4 }} />
      <Button
        style={styles.button_red}
        variant="contained"
        onClick={() => {
          setLoggedIn(false);
        }}
      >
        Logout
      </Button>
    </div>
  );
}