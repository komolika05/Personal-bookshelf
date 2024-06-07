import React, { useState } from "react";
import "./SearchBar.css"; 

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search for books..."
      className="search-input"
    />
  );
}

export default SearchBar;
