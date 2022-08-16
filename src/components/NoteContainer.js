import React from "react";
import NoteList from "./NoteList";

function NoteContainer({ title, notes, onDelete, onArchieve, onChange }) {
  return (
    <>
      <h2>{title}</h2>
      <NoteList notes={notes} onDelete={onDelete} onArchieve={onArchieve} onChange={onChange}/>
    </>
  );
}

export default NoteContainer;
