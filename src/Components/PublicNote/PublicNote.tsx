import * as React from "react";
import styles from "../../styles";
import { NoteProps } from "../../Interfaces/Interfaces";

export default function PublicNote(props: NoteProps) {
  return (
    <div style={styles.flex_column}>
      <div style={styles.note}>
        <p style={styles.text_medium}>Owner: {props.owner}</p>
        <p style={styles.text_medium}>Title: {props.title}</p>
        <div style={styles.note_content}>
          <textarea
            style={styles.input_notebody}
            disabled={true}
            value={props.content}
          />
        </div>
        <p style={styles.text_medium}>
          Timestamp: {String(props.date_created)}
        </p>
        <p style={styles.text_medium}>Public: {props.public ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
