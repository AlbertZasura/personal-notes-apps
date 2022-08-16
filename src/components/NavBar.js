import React from "react";
import SearchBar from "./SearchBar";

class Navbar extends React.Component {
  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <SearchBar />
      </div>
    );
  }
}

export default Navbar;
