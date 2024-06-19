// src/pages/SearchPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import './SearchPage.css'; // Create this file for custom styles

function SearchPage() {
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
    if (savedBookshelf) {
      setBookshelf(savedBookshelf);
    }
  }, []);

  const handleSearch = async (query) => {
    if (query.length > 2) {
      setLoading(true);
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        const booksWithKeys = response.data.docs.map((book, index) => ({
          ...book,
          key: book.key || index.toString(),
        }));
        setBooks(booksWithKeys);
      } catch (err) {
        console.error('Failed to fetch books', err);
      }
      setLoading(false);
    } else {
      setBooks([]);
    }
  };

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  const isBookInBookshelf = (book) => {
    return bookshelf.some((shelfBook) => shelfBook.key === book.key);
  };

  return (
    <div className="search-page">
      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} loading={loading} />
      </div>
      <div className="search-results">
        {books.map((book) => (
          <BookCard 
            key={book.key} 
            book={book} 
            onAdd={addToBookshelf} 
            isInBookshelf={isBookInBookshelf(book)} 
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
