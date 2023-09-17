/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Note = ({ note, onDelete }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function handleDelete() {
    onDelete();
    setIsDropdownVisible(false);
  }

  function toggleDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  }



  return (
    <>
      <div className="note">
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <button onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>
        {isDropdownVisible && <Dropdown onDelete={handleDelete} />}
      </div>
    </>
  );
};

export default Note;
