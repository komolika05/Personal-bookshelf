// src/pages/SearchPage.js
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

function SearchPage() {
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
        );
        setBooks(response.data.docs);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
        console.error(err);
      }
    } else {
      setBooks([]);
      setError(null); // Clear any previous errors
    }
  };

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(newBookshelf));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="search-results">
        {books.map((book) => (
          <BookCard key={book.key} book={book} onAdd={addToBookshelf} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
