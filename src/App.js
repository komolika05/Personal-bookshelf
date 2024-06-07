import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import BookshelfPage from "./pages/BookshelfPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>My Personal Bookshelf</h1>
        </header>
        <nav>
          <Navigation />
        </nav>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/bookshelf" element={<BookshelfPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();
  return (
    <ul>
      {location.pathname === "/" ? (
        <li>
          <Link to="/bookshelf">
            <button>My Bookshelf</button>
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/">
              <button>Search Books</button>
            </Link>
          </li>
          <li>
            <Link to="/bookshelf">
              <button className="selected">My Bookshelf</button>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default App;
