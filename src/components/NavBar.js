import React from "react";
import SearchBar from "./SearchBar";

function Navbar({onSearch}) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
}

export default Navbar;
