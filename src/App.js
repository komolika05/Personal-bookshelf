import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import BookshelfPage from "./pages/BookshelfPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Search Books</Link>
            </li>
            <li>
              <Link to="/bookshelf">My Bookshelf</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/bookshelf" element={<BookshelfPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
