import React from "react";

function Button({ name, actionHandler, id, style }) {
  return (
    <button
      className={`note-item__${style.toLowerCase()}-button`}
      onClick={() => actionHandler(id)}
    >
      {name}
    </button>
  );
}

export default Button;
