import React from "react";
import "./SearchBox.css";

function SearchBox({ Searchfield, SearchChange, searchedUsers }) {
  return (
    <div className="center">
      <input
        className="bg-lightest-blue ma2 f4 center"
        type="search"
        placeholder="search item here"
        onChange={SearchChange}
      />
    </div>
  );
}

export default SearchBox;
