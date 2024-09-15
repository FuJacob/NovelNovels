import React from 'react';
import { Link } from 'react-router-dom';
import './Library.css';
import './App.css';
import './fonts.css';

function Library() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-menu">
          <div className="navbar w-nav">
            <div className="container w-container">
              <Link to="/" className="brand w-nav-brand">
                <div className="text-block">storyAI</div>
              </Link>
              <nav role="navigation" className="nav-menu w-nav-menu">
                <Link to="#settings" className="nav-link w-nav-link">Settings</Link>
              </nav>
              <div className="w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
        <div className='library-container'>
          <h1>My Library</h1>
          <p>Welcome to your personal library. Here you can view and manage your books.</p>
          <div className="book-list">
            {/* Add a list of books or placeholder content here */}
            <Link to="/reader" className="book-item"><img src="./covers/golden-bird-cover.jpg" alt="Contact" />Book 1</Link>
            <Link to="/2" className="book-item">Book 2</Link>
            <Link to="/3" className="book-item">Book 3</Link>
            <Link to="/4" className="book-item">Book 4</Link>
            <Link to="/5" className="book-item">Book 5</Link>
            <Link to="/6" className="book-item">Book 6</Link>
            <Link to="/7" className="book-item">Book 7</Link>
            <Link to="/8" className="book-item">Book 8</Link>
          </div>
          <Link to="/" className="back-button">Back to Home</Link>
        </div>
      </header>
    </div>
  );
}

export default Library;