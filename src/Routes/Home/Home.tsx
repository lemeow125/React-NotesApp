import styles from "../../styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={styles.background}>
      <div style={{ ...styles.header, ...{ height: "8vh" } }}>
        <p style={styles.text_medium}>React - A Notes Demo</p>
      </div>
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
