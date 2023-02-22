import * as React from "react";
import styles from "../../../styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Note from "../Note";
import { Button } from "@mui/material";

export default function NoteMapper() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  useEffect(() => {
    fetch("localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotes(data);
      })
      .catch((err) => {
        setError(true);
        console.log(err.message);
        seterrormessage(err.message);
      });
  }, []);
  if (error) {
    return (
      <div style={styles.note}>
        <p style={styles.text_medium}>404</p>
        <p style={styles.text_medium}>{errormessage}</p>
      </div>
    );
  }
  if (!notes) {
    <div style={styles.note}>
      <p style={styles.text_medium}>No notes exist yet</p>
      <p style={styles.text_medium}>Make one!</p>
      <Button
        style={styles.button_add}
        variant="contained"
        onClick={() => {
          navigate("/NewNote");
        }}
      >
        Add Note
      </Button>
    </div>;
  }
  return (
    <>
      {notes.map((note: { title: string; content: string }) => (
        <Note title={note.title} content={note.content} />
      ))}
      <Button
        style={styles.button_add}
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
