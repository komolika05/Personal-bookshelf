import React, { useState } from "react";

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
    />
  );
}

export default SearchBar;
