import * as React from "react";
import { useState } from "react";
import styles from "../../styles";
import { Switch } from "@mui/material";
import Notes from "../Notes/Notes";
import PublicNotes from "../PublicNotes/Notes";

export default function ViewToggle() {
  const [switchLabel, setLabel] = useState("Viewing public notes");
  const [togglePublic, setToggled] = useState(true);
  if (togglePublic) {
    return (
      <div style={styles.background}>
        <div
          style={{
            marginLeft: 16,
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Switch
            checked={togglePublic}
            onClick={() => {
              setToggled(!togglePublic);
              if (togglePublic) {
                setLabel("Viewing own notes");
              } else {
                setLabel("Viewing public notes");
              }
            }}
          />
          <p style={styles.text_small}>{switchLabel}</p>
        </div>
        <p style={styles.text_medium}>Public Notes</p>
        <PublicNotes />
      </div>
    );
  }
  return (
    <div style={styles.background}>
      <div
        style={{
          marginLeft: 16,
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Switch
          checked={togglePublic}
          onClick={() => {
            setToggled(!togglePublic);
            if (togglePublic) {
              setLabel("Viewing own notes");
            } else {
              setLabel("Viewing public notes");
            }
          }}
        />
        <p style={styles.text_small}>{switchLabel}</p>
      </div>
      <p style={styles.text_medium}>Private Notes</p>
      <Notes />
    </div>
  );
}
