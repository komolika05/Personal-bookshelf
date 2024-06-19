import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Search for books..." 
        className="search-input"
      />
      {loading && <div className="loading-spinner"></div>}
    </div>
  );
}

export default SearchBar;
