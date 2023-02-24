import * as React from "react";
import styles from "../../styles";
import { Button } from "@mui/material";
import axios from "axios";

export interface props {
  title: string;
  content: string;
  id: number;
  date_created: string;
}
export default function Note(props: props) {
  return (
    <div style={styles.flex_column}>
      <div style={styles.note}>
        <p style={styles.text_medium}>{props.title}</p>
        <div style={styles.note_content}>
          <p style={styles.text_small}>{props.content}</p>
        </div>
        <p style={styles.text_medium}>Timestamp: {props.date_created}</p>
        <Button
          style={styles.button_remove}
          variant="contained"
          onClick={() => {
            axios.delete(
              "http://localhost:8000/api/v1/notes/" + props.id + "/"
            );
          }}
        >
          Remove Note
        </Button>
      </div>
    </div>
  );
}
