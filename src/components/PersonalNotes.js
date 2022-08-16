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
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="note-app__body">
          <NoteInput />
          <NoteContainer
            title={"Catatan Aktif"}
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
          />
          <NoteContainer
            title={"Arsip"}
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
          />
        </div>
      </>
    );
  }
}

export default PersonalNotes;
