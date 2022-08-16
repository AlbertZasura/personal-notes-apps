import React from "react";

function Button({ name, actionHandler, id, styleClass }) {
  return (
    <button
      className={`note-item__${styleClass}-button`}
      onClick={() => actionHandler(id)}
    >
      {name}
    </button>
  );
}

export default Button;
