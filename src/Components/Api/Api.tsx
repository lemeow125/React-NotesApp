import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
export function GetNotes() {
  return axios.get("http://localhost:8000/api/v1/notes/").then((response) => {
    return response.data;
  });
}

export interface note {
  title: string;
  content: string;
}

export function AddNote(note: note) {
  return axios
    .post("http://localhost:8000/api/v1/notes/", note)
    .then((response) => {
      return response.data;
    });
}

export function DeleteNote(id: number) {
  return axios.delete("http://localhost:8000/api/v1/notes/" + id + "/");
}

export interface user {
  username: string;
  password: string;
}

export function UserLogin(user: user) {
  return axios
    .post("http://localhost:8000/api/v1/accounts/token/login/", user)
    .then(async (response) => {
      localStorage.setItem("token", JSON.stringify(response.data.auth_token));
      console.log("Stored: ", JSON.parse(localStorage.getItem("token") || ""));
      return true;
    })
    .catch((error) => {
      console.log("Login Failed: " + error);
      return false;
    });
}

export function UserInfo() {
  const token = JSON.parse(localStorage.getItem("token") || "");
  return axios
    .get("http://localhost:8000/api/v1/accounts/users/me/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error in fetching user data");
      console.log(error);
    });
}
