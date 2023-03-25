import styles from "../../styles";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import { GetNote, UpdateNote } from "../../Components/Api/Api";
import { useMutation, useQuery, useQueryClient } from "react-query";

export interface input {
  e: React.ChangeEvent;
}
export default function ViewNote() {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: UpdateNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });
  const [note, setNote] = useState({
    title: "test",
    content: "test",
  });
  async function retrieve() {
    let a = await GetNote(Number(id));
    setNote(a);
    return a;
  }
  const { data, isLoading, error } = useQuery("note", retrieve, {
    retry: 0,
  });
  useEffect(() => {
    setNote(data);
  }, [data]);
  if (error) {
    return (
      <div style={styles.background}>
        <Header />
        <div style={styles.note}>
          <p style={styles.text_medium_red}>Error retrieving specific note</p>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div style={styles.background}>
        <div style={styles.note}>
          <p style={styles.text_medium}>Loading Note...</p>
        </div>
      </div>
    );
  }
  if (data) {
    return (
      <div style={styles.background}>
        <Header />
        <p style={styles.text_medium}>Edit Note</p>
        <div style={styles.flex_column}>
          <div style={styles.note}>
            <div style={styles.flex_row}>
              <p style={styles.text_small}>Title:&nbsp;</p>
              <input
                style={styles.input_notetitle}
                value={note.title}
                onChange={(e: { target: { value: any } }) => {
                  setNote({ ...note, title: e.target.value });
                }}
                maxLength={20}
              />
            </div>
            <div style={styles.note_content}>
              <textarea
                style={styles.input_notebody}
                value={note.content}
                onChange={async (e: { target: { value: any } }) => {
                  await setNote({ ...note, content: e.target.value });
                }}
              />
            </div>
            <Button
              style={styles.button_green}
              variant="contained"
              onClick={async () => {
                try {
                  await mutation.mutate({
                    id: Number(id),
                    title: note.title,
                    content: note.content,
                  });
                  navigate("/");
                } catch (error) {}
              }}
            >
              Update Note
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
  return <div>heh</div>;
}
