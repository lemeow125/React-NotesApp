import styles from "../../styles";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserActivate } from "../../Components/Api/Api";

export interface activation {
  uid: string;
  token: string;
}
export default function Activation() {
  let { uid, token } = useParams();
  const [status, setStatus] = useState(0);
  async function verify(activation: activation) {
    let status = await UserActivate(activation);
    if (status) {
      setStatus(1);
    } else {
      setStatus(2);
    }
  }
  useEffect(() => {
    if (uid && token) {
      verify({ uid, token });
    }
  }, []);
  if (status === 1) {
    return (
      <div style={styles.background}>
        <Header />
        <div style={styles.note}>
          <p style={styles.text_small}>User ID: {uid}</p>
          <p style={styles.text_small}>Activation Token: {token}</p>
          <p style={styles.text_small_green}>
            Activation Successful. Please login
          </p>
        </div>
      </div>
    );
  }
  if (status === 2) {
    return (
      <div style={styles.background}>
        <Header />
        <div style={styles.note}>
          <p style={styles.text_small}>User ID: {uid}</p>
          <p style={styles.text_small}>Activation Token: {token}</p>
          <p style={styles.text_small_red}>Invalid Activation Link</p>
        </div>
      </div>
    );
  }
  return (
    <div style={styles.background}>
      <Header />
      <div style={styles.note}>
        <p style={styles.text_small}>User ID: {uid}</p>
        <p style={styles.text_small}>Activation Token: {token}</p>
        <p style={styles.text_small}>Activating...</p>
      </div>
    </div>
  );
}
