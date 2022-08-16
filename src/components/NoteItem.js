import React from "react";
import { showFormattedDate } from "../utils";
import Button from "./Button";
import NoteContent from "./NoteContent";

function NoteItem({ title, body, createdAt, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteContent
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
      />
      <div className="note-item__action">
        <Button name={"Delete"} actionHandler={onDelete} />
        <Button name={"Archive"} actionHandler={onArchive} />
      </div>
    </div>
  );
}

export default NoteItem;
