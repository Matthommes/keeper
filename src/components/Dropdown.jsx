/* eslint-disable react/prop-types */

// import { useState } from "react";

const Dropdown = ({ onDelete, position }) => {
  const style = {
    top: `${position}px`,
  };
  return (
    <div className="dropdown" style={style}>
      <ul className="dropdown-menu">
        <li onClick={onDelete}>Delete note</li>
        <li>Lock note</li>
        <li>Make a copy</li>
      </ul>
    </div>
  );
};

export default Dropdown;
