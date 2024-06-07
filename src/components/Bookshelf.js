import React from "react";

function Bookshelf({ books }) {
  return (
    <div className="bookshelf">
      {books.length === 0 ? (
        <p>No books in your bookshelf.</p>
      ) : (
        books.map((book, index) => (
          <div key={index} className="bookshelf-book">
            <h3>{book.title}</h3>
            <p>
              {book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Bookshelf;
