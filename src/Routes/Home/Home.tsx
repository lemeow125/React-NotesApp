import styles from "../../styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Note from "../../Components/Note/Note";
import Header from "../../Components/Note/Header/Header";

export default function Home() {
  const navigate = useNavigate();
  const notes_sample = [
    { title: "note1", content: "notes are great!" },
    { title: "note2", content: "notes are awesome!" },
  ];
  return (
    <div style={styles.background}>
      <Header />
      {notes_sample.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
      <div style={styles.flex_row}>
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
    </div>
  );
}
