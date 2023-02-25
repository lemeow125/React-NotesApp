import axios from "axios";

export function GetNotes() {
  return axios.get("http://localhost:8000/api/v1/notes/").then((res) => {
    return res.data;
  });
  /*return fetch("http://localhost:8000/api/v1/notes/").then((res) => {
    console.log(res.body);
    return res.json();
  });*/
}
