import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, onChange }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          onChange={onChange}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
