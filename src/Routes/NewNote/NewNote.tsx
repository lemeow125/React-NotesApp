import styles from "../../styles";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function NewNote() {
  const navigate = useNavigate();
  return (
    <div style={styles.background}>
      <div style={{ ...styles.header, ...{ height: "8vh" } }}>
        <p style={styles.text_medium}>React - A Notes Demo</p>
      </div>
      <p style={styles.text_medium}>New Note</p>
      <div style={styles.flex_column}>
        <div style={styles.note}>
          <p style={styles.text_medium}>Note Title</p>
          <div style={styles.note_content}>
            <p style={styles.text_small}>Notes Content</p>
          </div>
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
