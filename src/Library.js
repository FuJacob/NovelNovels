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
          <p>Which book would you like to read today?</p>
          <div className="book-list">
            <Link to="/reader" className="book-item">
              <div className="book-cover">
                <img src="./covers/old-man-cover.jpg" alt="Book 1" />
              </div>
              <div className="book-title">The Old Man and the Sea</div>
            </Link>
            <Link to="/2" className="book-item">
              <div className="book-cover"><img src="./covers/golden-bird-cover.jpg" alt="Book 2" /></div>
              <div className="book-title">The Golden Bird</div>
            </Link>
            <Link to="/3" className="book-item">
              <div className="book-cover"><img src="./covers/alice-in-cover.jpg" alt="Book 3" /></div>
              <div className="book-title">Alice in Wonderland</div>
            </Link>
            <Link to="/4" className="book-item">
              <div className="book-cover"><img src="./covers/a-modest-cover.jpg" alt="Book 4" /></div>
              <div className="book-title">A Modest Proposal</div>
            </Link>
            <Link to="/5" className="book-item">
              <div className="book-cover"><img src="./covers/great-gatsby-cover.jpg" alt="Book 5" /></div>
              <div className="book-title">The Great Gatsby</div>
            </Link>
            <Link to="/6" className="book-item">
              <div className="book-cover"><img src="./covers/ethan-frome-cover.jpg" alt="Book 6" /></div>
              <div className="book-title">Ethan Frome</div>
            </Link>
            <Link to="/7" className="book-item">
              <div className="book-cover"><img src="./covers/jekyll-hyde-cover.jpg" alt="Book 7" /></div>
              <div className="book-title">Jekyll and Hyde</div>
            </Link>
            <Link to="/8" className="book-item">
              <div className="book-cover"><img src="./covers/three-little-cover.jpg" alt="Book 8" /></div>
              <div className="book-title">Three Little Pigs</div>
            </Link>
          </div>
          {/* <Link to="/" className="back-button">Back to Home</Link> */}
        </div>
      </header>
    </div>
  );
}

export default Library;
