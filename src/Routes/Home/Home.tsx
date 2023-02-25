import styles from "../../styles";
import Header from "../../Components/Header/Header";
import NoteMapper from "../../Components/Notes/Notes";
export default function Home() {
  return (
    <div style={styles.background}>
      <Header />
      <NoteMapper />
    </div>
  );
}
