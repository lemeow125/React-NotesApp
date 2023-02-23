import * as React from "react";
import styles from "../../styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Note from "../Note/Note";
import { Button } from "@mui/material";
import axios from "axios";

export default function NoteMapper() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  function server_get() {
    axios
      .get("http://localhost:8000/notes/")
      .then((res) => {
        console.log("Server Response", res.data);
        setNotes(res.data);
      })
      .catch((err) => {
        setError(true);
        seterrormessage(err);
      });
  }
  useEffect(() => {
    server_get();
    const interval = setInterval(() => {
      server_get();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if (error) {
    return (
      <div style={styles.note}>
        <p style={styles.text_medium}>404</p>
        <p style={styles.text_medium}>{errormessage}</p>
      </div>
    );
  }
  if (notes.length === 0) {
    return (
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
      </div>
    );
  }
  return (
    <>
      {notes.map((note: { title: string; content: string; id: number }, i) => {
        console.log(note);
        return (
          <Note
            id={note.id}
            key={i}
            title={note.title}
            content={note.content}
          />
        );
      })}

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
