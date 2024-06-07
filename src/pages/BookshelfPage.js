import React, { useEffect, useState } from "react";
import Bookshelf from "../components/Bookshelf";

function BookshelfPage() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem("bookshelf"));
    if (savedBookshelf) {
      setBookshelf(savedBookshelf);
    }
  }, []);

  return (
    <div>
      <h2>My Bookshelf</h2>
      <Bookshelf books={bookshelf} />
    </div>
  );
}

export default BookshelfPage;
