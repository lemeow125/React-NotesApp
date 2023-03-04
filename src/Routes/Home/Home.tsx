import styles from "../../styles";
import Header from "../../Components/Header/Header";
import Notes from "../../Components/Notes/Notes";
export default function Home() {
  return (
    <div style={styles.background}>
      <Header />
      <Notes />
    </div>
  );
}
