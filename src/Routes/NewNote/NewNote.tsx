import styles from "../../styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../Components/Note/Header/Header";
import axios from "axios";
import { title } from "process";

export interface input {
  e: React.ChangeEvent;
}
export default function NewNote() {
  const navigate = useNavigate();
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  return (
    <div style={styles.background}>
      <Header />
      <p style={styles.text_medium}>New Note</p>
      <div style={styles.flex_column}>
        <div style={styles.note}>
          <div style={styles.flex_row}>
            <p style={styles.text_small}>Title:&nbsp;</p>
            <input
              style={styles.input_notetitle}
              onChange={(e: { target: { value: any } }) => {
                setNote({ ...note, title: e.target.value });
              }}
              maxLength={20}
            />
          </div>
          <div style={styles.note_content}>
            <textarea
              style={styles.input_notebody}
              onChange={(e: { target: { value: any } }) => {
                setNote({ ...note, content: e.target.value });
              }}
            />
          </div>
          <Button
            style={styles.button_add}
            variant="contained"
            onClick={async () => {
              axios.post("http://localhost:8000/notes/", {
                title: note.content,
                content: note.content,
              });
              console.log("foo");
              navigate("/");
            }}
          >
            Add Note
          </Button>
        </div>
      </div>
      <div style={styles.flex_row}>
        <Button
          style={styles.button_remove}
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
