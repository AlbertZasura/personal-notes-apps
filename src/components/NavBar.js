import React from "react";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <SearchBar />
    </div>
  );
}

export default Navbar;
