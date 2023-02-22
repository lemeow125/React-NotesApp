import styles from "../../styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Note/Header/Header";

export default function NewNote() {
  const navigate = useNavigate();
  return (
    <div style={styles.background}>
      <Header />
      <p style={styles.text_medium}>New Note</p>
      <div style={styles.flex_column}>
        <div style={styles.note}>
          <input style={styles.input_notetitle} maxLength={20} />
          <div style={styles.note_content}>
            <p style={styles.text_small}>Content</p>
            <textarea style={styles.input_notebody} />
          </div>
          <Button
            style={styles.button_add}
            variant="contained"
            onClick={() => {
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
