import React from "react";

function Button({ name, actionHandler }) {
  return (
    <button
      className={`note-item__${name.toLowerCase()}-button`}
      onClick={actionHandler}
    >
      {name}
    </button>
  );
}

export default Button;
