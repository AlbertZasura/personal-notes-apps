import React from "react";

function Button({ name, actionHandler, id }) {
  return (
    <button
      className={`note-item__${name.toLowerCase()}-button`}
      onClick={() => actionHandler(id)}
    >
      {name}
    </button>
  );
}

export default Button;
