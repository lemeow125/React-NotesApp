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
