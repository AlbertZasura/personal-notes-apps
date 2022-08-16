import React from "react";
import { showFormattedDate } from "../utils";
import Button from "./Button";
import NoteContent from "./NoteContent";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteContent
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
      />
      <div className="note-item__action">
        <Button id={id} name={"Delete"} actionHandler={onDelete} />
        <Button id={id} name={"Archive"} actionHandler={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
