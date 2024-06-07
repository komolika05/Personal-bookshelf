import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

function SearchPage() {
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  const handleSearch = async (query) => {
    if (query.length > 2) {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      setBooks(response.data.docs);
    } else {
      setBooks([]);
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
      <div className="search-results">
        {books.map((book) => (
          <BookCard key={book.key} book={book} onAdd={addToBookshelf} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
