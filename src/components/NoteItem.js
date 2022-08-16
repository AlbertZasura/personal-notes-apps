import React from "react";
import { showFormattedDate } from "../utils";
import Button from "./Button";
import NoteContent from "./NoteContent";

function NoteItem({ id, title, body, createdAt, onChange, onDelete, onArchieve }) {
  if (onChange) {
    return (
      <div className="note-item">
        <NoteContent
          title={title}
          body={body}
          createdAt={showFormattedDate(createdAt)}
        />
        <div className="note-item__action">
          <Button id={id} name={"Delete"} style={"delete"} actionHandler={onDelete} />
          <Button id={id} name={"Pindahkan"} style={"archive"} actionHandler={onChange} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="note-item">
        <NoteContent
          title={title}
          body={body}
          createdAt={showFormattedDate(createdAt)}
        />
        <div className="note-item__action">
          <Button id={id} name={"Delete"} style={"delete"} actionHandler={onDelete} />
          <Button id={id} name={"Arsipkan"} style={"archive"} actionHandler={onArchieve} />
        </div>
      </div>
    );
  }
  
}

export default NoteItem;
