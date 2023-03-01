import * as React from "react";

import styles from "../../styles";
import AppIcon from "../AppIcon/AppIcon";
import Login from "../LoginButton/LoginButton";
import HomeIcon from "../HomeIcon/HomeIcon";

export default function Header() {
  return (
    <div style={styles.header}>
      <div style={styles.flex_row}>
        <div
          style={{
            ...styles.header_contentwrapper,
            ...{ flex: 2 },
          }}
        >
          <HomeIcon size={32} color="white" />
          <HomeIcon size={32} color="white" />
          <HomeIcon size={32} color="white" />
        </div>
        <div
          style={{
            ...styles.header_contentwrapper,
            ...{ flex: 6 },
          }}
        >
          <AppIcon size={48} color="white" />
          <p style={styles.text_medium}>Clip Notes</p>
        </div>
        <div
          style={{
            ...styles.header_contentwrapper,
            ...{ flex: 2 },
          }}
        >
          <div style={styles.flex_row}>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
