import React from "react";
import NoteList from "./NoteList";

function NoteContainer({ title, notes }) {
  return (
    <>
      <h2>{title}</h2>
      <NoteList notes={notes} />
    </>
  );
}

export default NoteContainer;
