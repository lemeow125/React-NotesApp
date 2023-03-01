import * as React from "react";
import styles from "../../styles";
import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { DeleteNote } from "../Api/Api";
import { NoteProps } from "../../Interfaces/Interfaces";

export default function Note(props: NoteProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: DeleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });
  return (
    <div style={styles.flex_column}>
      <div style={styles.note}>
        <p style={styles.text_medium}>{props.title}</p>
        <div style={styles.note_content}>
          <p style={styles.text_small}>{props.content}</p>
        </div>
        <p style={styles.text_medium}>Timestamp: {props.date_created}</p>
        <Button
          style={styles.button_red}
          variant="contained"
          onClick={() => {
            mutation.mutate(props.id);
          }}
        >
          Remove Note
        </Button>
      </div>
    </div>
  );
}
