import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchieve, onChange }) {
  if (notes.length===0) {
    return (
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    );
  } else {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            onChange={onChange}
            onDelete={onDelete}
            onArchieve={onArchieve}
            {...note}
          />
        ))}
      </div>
    );
  }
}

export default NoteList;
