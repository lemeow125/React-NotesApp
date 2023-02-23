import styles from "../../styles";
import { Button } from "@mui/material";

import Note from "../../Components/Note/Note";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from "react";
import NoteMapper from "../../Components/NoteMapper/NoteMapper";
export default function Home() {
  const [notes, setNotes] = useState();
  const notes_sample = [
    { title: "note1", content: "notes are great!" },
    { title: "note2", content: "notes are awesome!" },
  ];
  return (
    <div style={styles.background}>
      <Header />
      {/*}
      {notes_sample.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
      {*/}
      <NoteMapper />
    </div>
  );
}
