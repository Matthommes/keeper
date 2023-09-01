/* eslint-disable react/prop-types */
const Note = ({ note, onDelete }) => {
  return (
    <>
      <div className="note">
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <button onClick={onDelete}>DELETE</button>
      </div>
    </>
  );
};

export default Note;
