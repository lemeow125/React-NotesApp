import * as React from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import Note from "../Note/Note";
import { Button } from "@mui/material";
import { useQuery } from "react-query";
import { GetNotes } from "../Api/Api";
import { useSelector } from "react-redux";
import { NoteProps } from "../../Interfaces/Interfaces";
import { RootState } from "../../Features/Redux/Store/Store";

export default function Notes() {
  const navigate = useNavigate();
  const {
    data: notes,
    isLoading,
    error,
  } = useQuery("notes", GetNotes, { retry: 0 });
  const logged_in = useSelector((state: RootState) => state.logged_in.value);
  if (isLoading) {
    return (
      <div style={styles.note}>
        <p style={styles.text_medium}>Loading Notes...</p>
      </div>
    );
  } else if (!logged_in && error) {
    return (
      <div style={styles.note}>
        <p style={styles.text_medium}>Please login to use Clip Notes</p>
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
          <Note
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
