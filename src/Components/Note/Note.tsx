import * as React from "react";
import styles from "../../styles";
import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { DeleteNote } from "../Api/Api";
import { NoteProps } from "../../Interfaces/Interfaces";
import { useNavigate } from "react-router-dom";

export default function Note(props: NoteProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: DeleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      queryClient.invalidateQueries("public_notes");
    },
  });
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
        <div style={styles.flex_row}>
          <Button
            style={styles.button_red}
            variant="contained"
            onClick={() => {
              mutation.mutate(props.id);
            }}
          >
            Remove Note
          </Button>
          <Button
            style={styles.button_yellow}
            variant="contained"
            onClick={() => {
              navigate("/Note/" + props.id);
            }}
          >
            Edit Note
          </Button>
        </div>
      </div>
    </div>
  );
}
