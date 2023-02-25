import axios from "axios";

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
    .post("http://localhost:8000/api/v1/accounts/token/login", user)
    .then((response) => {
      console.log("Success! Token: " + response.data);
      return true;
    })
    .catch((error) => {
      console.log("Login Failed: " + error);
      return false;
    });
}

export function UserInfo() {
  return axios
    .get("http://localhost:8000/api/v1/accounts/users/me/", {
      headers: { Authorization: "Bearer " + "Token hereee!" },
    })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log("Error in fetching user data");
    });
}
