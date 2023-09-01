import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea.jsx";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(index) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, i) => {
        return i !== index;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note key={index} note={note} onDelete={() => deleteNote(index)} />
      ))}
      <Footer />
    </>
  );
}
