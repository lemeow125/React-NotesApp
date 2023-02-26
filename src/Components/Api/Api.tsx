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
    .post("http://localhost:8000/api/v1/accounts/token/login/", user)
    .then(async (response) => {
      console.log("Login Success! Token: " + response.data);
      localStorage.setItem("token", response.data);
      console.log(await UserInfo());
      return true;
    })
    .catch((error) => {
      console.log("Login Failed: " + error);
      return false;
    });
}

export function UserInfo() {
  const token = localStorage.getItem("token");
  return axios
    .get("http://localhost:8000/api/v1/accounts/users/me/", {
      headers: {
        Authorization: "Token 8b3a393fc7601a5a1f2a831bc795905c05420782",
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
