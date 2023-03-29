import * as React from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useQuery } from "react-query";
import { GetPublicNotes } from "../Api/Api";
import { NoteProps } from "../../Interfaces/Interfaces";
import PublicNote from "../PublicNote/PublicNote";

export default function PublicNotes() {
  const navigate = useNavigate();
  const {
    data: notes,
    isLoading,
    error,
  } = useQuery("public_notes", GetPublicNotes, { retry: 0 });
  if (isLoading) {
    return (
      <div style={styles.note}>
        <p style={styles.text_medium}>Loading Notes...</p>
      </div>
    );
  } else if (error) {
    return (
      <div style={styles.note}>
        <p style={styles.text_medium_red}>Error contacting Notes server</p>
      </div>
    );
  } else if (notes.length === 0) {
    return (
      <div style={styles.note}>
        <p style={styles.text_medium}>No notes exist yet</p>
        <p style={styles.text_medium}>Make one!</p>
        <Button
          style={styles.button_green}
          variant="contained"
          onClick={() => {
            navigate("/NewNote");
          }}
        >
          Add Note
        </Button>
      </div>
    );
  }
  return (
    <>
      {notes.map((note: NoteProps, index: number) => {
        return (
          <PublicNote
            id={note.id}
            key={index}
            title={note.title}
            content={note.content}
            date_created={note.date_created}
            owner={note.owner}
            public={note.public}
          />
        );
      })}
    </>
  );
}
