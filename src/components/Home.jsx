import { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea.jsx";

export default function Home() {
  const [notes, setNotes] = useState([], () => {
    const noteData = localStorage.getItem("notes");
    return noteData ? JSON.parse(noteData) : [];
  });
  


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
        <Note
          key={index}
          note={note}
          onDelete={() => deleteNote(index)}
          // onToggle={toggleDropdown}
        />
      ))}

      <Footer />
    </>
  );
}
