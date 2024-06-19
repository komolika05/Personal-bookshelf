import React from 'react';
import './BookCard.css'; 

function BookCard({ book, onAdd, isInBookshelf }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
      <button 
        onClick={() => onAdd(book)} 
        disabled={isInBookshelf}
        className={isInBookshelf ? 'added' : ''}
      >
        {isInBookshelf ? '✓ Added' : 'Add to Bookshelf'}
      </button>
    </div>
  );
}

export default BookCard;
