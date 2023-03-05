import styles from "../../styles";
import Header from "../../Components/Header/Header";
import { UserInfo } from "../../Components/Api/Api";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { LoginState } from "../../Interfaces/Interfaces";
import LoginButton from "../../Components/LoginButton/LoginButton";

export default function UserPage() {
  const { data, isLoading, error } = useQuery("user", UserInfo, { retry: 0 });
  const logged_in = useSelector((state: LoginState) => state.Login.logged_in);
  if (isLoading && !error) {
    return (
      <div style={styles.background}>
        <Header />
        <div style={styles.note}>
          <p style={styles.text_medium}>Loading...</p>
        </div>
      </div>
    );
  } else if (!logged_in && error) {
    return (
      <div style={styles.background}>
        <Header />
        <div style={styles.note}>
          <p style={styles.text_medium}>Please login to view user info</p>
          <LoginButton />
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div style={styles.background}>
        <Header />
        <div style={styles.note}>
          <p style={styles.text_medium_red}>An error has occured</p>
        </div>
      </div>
    );
  }
  return (
    <div style={styles.background}>
      <Header />
      <div style={styles.note}>
        <p style={styles.text_medium}>Username: {data.username}</p>
        <p style={styles.text_medium}>Email: {data.email}</p>
        <p style={styles.text_medium}>User ID: {data.id}</p>
      </div>
    </div>
  );
}
