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
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="note-app__body">
          <NoteInput/>
          <NoteContainer title={"Catatan Aktif"} notes={this.state.notes} />
          <NoteContainer title={"Arsip"} notes={this.state.notes} />
        </div>
      </>
    );
  }
}

export default PersonalNotes;
