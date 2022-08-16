import React from "react";
import NoteList from "./NoteList";

function NoteContainer({ title, notes, onDelete }) {
  return (
    <>
      <h2>{title}</h2>
      <NoteList notes={notes} onDelete={onDelete}/>
    </>
  );
}

export default NoteContainer;
