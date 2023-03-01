import axios from "axios";
import {
  ActivationParams,
  AddNoteParams,
  LoginParams,
  RegistrationParams,
} from "../../Interfaces/Interfaces";

// Note APIs

export function GetNotes() {
  const token = JSON.parse(localStorage.getItem("token") || "");
  return axios
    .get("http://localhost:8000/api/v1/notes/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function AddNote(note: AddNoteParams) {
  const token = JSON.parse(localStorage.getItem("token") || "");
  return axios
    .post("http://localhost:8000/api/v1/notes/", note, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function DeleteNote(id: number) {
  const token = JSON.parse(localStorage.getItem("token") || "");
  return axios.delete("http://localhost:8000/api/v1/notes/" + id + "/", {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

// User APIs

export function UserRegister(register: RegistrationParams) {
  return axios
    .post("http://localhost:8000/api/v1/accounts/users/", register)
    .then(async (response) => {
      console.log(response.data);
      return true;
    })
    .catch((error) => {
      console.log("Registration failed: " + error);
      return false;
    });
}

export function UserLogin(user: LoginParams) {
  return axios
    .post("http://localhost:8000/api/v1/accounts/token/login/", user)
    .then(async (response) => {
      localStorage.setItem("token", JSON.stringify(response.data.auth_token));
      console.log(
        "Login Success! Stored Token: ",
        JSON.parse(localStorage.getItem("token") || "")
      );
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

export function UserActivate(activation: ActivationParams) {
  return axios
    .post("http://localhost:8000/api/v1/accounts/users/activation/", activation)
    .then(async (response) => {
      console.log("Activation Success");
      return true;
    })
    .catch((error) => {
      console.log("Activation failed: " + error);
      return false;
    });
}
