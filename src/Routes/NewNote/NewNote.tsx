import styles from "../../styles";
import { Button, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import { AddNote } from "../../Components/Api/Api";
import { useMutation, useQueryClient } from "react-query";

export interface input {
  e: React.ChangeEvent;
}
export default function NewNote() {
  const navigate = useNavigate();
  const [note, setNote] = useState({
    title: "",
    content: "",
    public: false,
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: AddNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      queryClient.invalidateQueries("public_notes");
    },
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
              onChange={async (e: { target: { value: any } }) => {
                await setNote({ ...note, content: e.target.value });
              }}
            />
          </div>
          <div style={styles.flex_row}>
            <p style={styles.text_small}>Public Note?</p>
            <input
              type="checkbox"
              onClick={() => {
                setNote({ ...note, public: !note.public });
              }}
            />
          </div>
          <Button
            style={styles.button_green}
            variant="contained"
            onClick={async () => {
              try {
                await mutation.mutate({
                  title: note.title,
                  content: note.content,
                  public: note.public,
                });
                navigate("/");
              } catch (error) {}
            }}
          >
            Add Note
          </Button>
        </div>
      </div>
      <div style={styles.flex_row}>
        <Button
          style={styles.button_red}
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
