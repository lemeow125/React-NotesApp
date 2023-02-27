import * as React from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import Note from "../Note/Note";
import { Button } from "@mui/material";
import { useQuery } from "react-query";
import { GetNotes } from "../Api/Api";

export default function Notes() {
  const navigate = useNavigate();
  const {
    data: notes,
    isLoading,
    error,
  } = useQuery("notes", GetNotes, { retry: 0 });
  if (error) {
    return (
      <div style={styles.note}>
        <p style={styles.text_medium_red}>Error contacting Notes server</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div style={styles.note}>
        <p style={styles.text_medium}>Loading Notes...</p>
      </div>
    );
  }
  if (notes.length === 0) {
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
      {notes.map(
        (
          note: {
            title: string;
            content: string;
            id: number;
            date_created: string;
          },
          index: number
        ) => {
          return (
            <Note
              id={note.id}
              key={index}
              title={note.title}
              content={note.content}
              date_created={note.date_created}
            />
          );
        }
      )}
      <Button
        style={styles.button_green}
        variant="contained"
        onClick={() => {
          navigate("/NewNote");
        }}
      >
        Add Note
      </Button>
    </>
  );
}
