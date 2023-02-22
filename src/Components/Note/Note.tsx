import * as React from "react";
import styles from "../../styles";
import { Button } from "@mui/material";

export interface props {
  title: string;
  content: string;
}
export default function Note(props: props) {
  return (
    <div style={styles.flex_column}>
      <div style={styles.note}>
        <p style={styles.text_medium}>{props.title}</p>
        <div style={styles.note_content}>
          <p style={styles.text_small}>{props.content}</p>
        </div>
        <Button
          style={styles.button_remove}
          variant="contained"
          onClick={() => {
            console.log("foo");
          }}
        >
          Remove Note
        </Button>
      </div>
    </div>
  );
}
