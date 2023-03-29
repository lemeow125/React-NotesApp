import styles from "../../styles";
import Header from "../../Components/Header/Header";
import ViewToggle from "../../Components/ViewToggle/ViewToggle";
export default function Home() {
  return (
    <div style={styles.background}>
      <Header />
      <ViewToggle />
    </div>
  );
}
