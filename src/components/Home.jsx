import { useState, useEffect } from "react";
import { getNotes, createNote, removeNotes } from "../note";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea.jsx";
import Loading from "./Loading";

export default function Home() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const noteData = await getNotes();
        setNotes(noteData ? noteData : []);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    fetchNotes();
  }, []);

  async function addNote(newNote) {
    try {
      const createdNote = await createNote(newNote);
      setNotes((prevNotes) => [...prevNotes, createdNote]);
    } catch (error) {
      console.error("Error adding note: ", error);
    }
  }

 async function deleteNote(index) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, i) => {
        return i !== index;
      });
    });
    await removeNotes()
  }
  // console.log(notes);

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes === null ? (
        <Loading />
      ) : notes.length === 0 ? (
        <p>No notes available</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            onDelete={() => deleteNote(index)}
            // onToggle={toggleDropdown}
          />
        ))
      )}

      <Footer />
    </>
  );
}
