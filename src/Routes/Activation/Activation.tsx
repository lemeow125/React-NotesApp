import styles from "../../styles";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { UserActivate } from "../../Components/Api/Api";

export interface activation {
  uid: string;
  token: string;
}
export default function Activation() {
  let { uid, token } = useParams();
  const [activationStatus, setStatus] = useState("Activating...");
  async function verify(activation: activation) {
    let status = await UserActivate(activation);
    if (status) {
      setStatus("Success!");
    } else {
      setStatus("Invalid Activation Link");
    }
  }
  if (uid && token) {
    verify({ uid, token });
  }
  return (
    <div style={styles.background}>
      <Header />
      <div style={styles.note}>
        <p style={styles.text_medium}>User ID: {uid}</p>
        <p style={styles.text_medium}>Activation Token: {token}</p>
        <p style={styles.text_medium}>{activationStatus}</p>
      </div>
    </div>
  );
}
