/* eslint-disable react/prop-types */

// import { useState } from "react";

const Dropdown = ({ onDelete, position }) => {
  const style = {
    top: `${position}px`,
  };
  return (
    <div className="dropdown" style={style}>
      <ul className="dropdown-menu">
        <li onClick={onDelete}>Delete</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  );
};

export default Dropdown;
