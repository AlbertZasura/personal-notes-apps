import React from "react";
import Navbar from "./NavBar";
import NoteContainer from "./NoteContainer";
import NoteInput from "./NoteInput";
import { getInitialData } from "../utils";

class PersonalNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchieveHandler = this.onArchieveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchHandler(keyword) {
    this.setState(() => {
      return {
        searchKeyword: keyword,
      };
    });
    console.log(this.state.notes)
  }

  onArchieveHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    let archivedNote = this.state.notes.filter((note) => note.id === id);
    archivedNote[0].archived = !archivedNote[0].archived;
    this.setState(() => {
      return {
        notes: [...notes, ...archivedNote],
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <Navbar onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteContainer
            title={"Catatan Aktif"}
            notes={this.state.notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(this.state.searchKeyword))}
            onDelete={this.onDeleteHandler}
            onArchieve={this.onArchieveHandler}
          />
          <NoteContainer
            title={"Arsip"}
            notes={this.state.notes.filter((note) => note.archived === true && note.title.includes(this.state.searchKeyword))}
            onDelete={this.onDeleteHandler}
            onChange={this.onArchieveHandler}
          />
        </div>
      </>
    );
  }
}

export default PersonalNotes;
