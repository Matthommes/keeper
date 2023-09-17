import localforage from "localforage";

export async function getNotes() {
  let notes = await localforage.getItem("notes");
  if (!notes) notes = [];
  return notes;
}

export async function createNote({ title, content }) {
  try {
    // let id = Math.random().toString(36).substring(2, 9);
    let note = { title, content };
    let notes = await getNotes();
    notes.push(note);
    await setNotes(notes);
    return note;
  } catch (error) {
    console.error(error);
  }
}

export async function removeNotes(id) {
  let notes = await localforage.getItem("notes");
  let index = notes.findIndex((note) => note.id === id);
  if (index > -1) {
    notes.splice(index, 1);
    await setNotes(notes);
    console.log(notes);
    return true;
  }
  return false;
}
function setNotes(notes) {
  return localforage.setItem("notes", notes);
}
