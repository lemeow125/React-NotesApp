import axios from "axios";
import { get } from "http";

export function GetNotes() {
  return fetch("http://localhost:8000/api/v1/notes/").then((res) => {
    console.log(res);
    return res.json();
  });
}
