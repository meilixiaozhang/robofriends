import React from "react";

function SearchBox({ searchTerm, searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-light-blue"
        type="search"
        placeholder="search robots"
        value={searchTerm}
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
