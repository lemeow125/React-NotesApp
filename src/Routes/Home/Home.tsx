import styles from "../../styles";
import Header from "../../Components/Header/Header";
import NoteMapper from "../../Components/NoteMapper/NoteMapper";
export default function Home() {
  return (
    <div style={styles.background}>
      <Header />
      <NoteMapper />
    </div>
  );
}
