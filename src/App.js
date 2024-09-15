// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useParams } from 'react-router-dom';
import './fonts.css';
import Library from './Library';
import Reader from './reader'

const myMessage = "hello this is my story man";

const utterance = new SpeechSynthesisUtterance();

utterance.text = myMessage;
window.speechSynthesis.speak(utterance);


// Simulate a call to Dropbox or other service that can
// return an image as an ArrayBuffer.

// Use JSFiddle logo as a sample image to avoid complicating
// this example with cross-domain issues.

function App() {

  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/library" element={<Library />} />
          <Route path="/reader/:id" element={<Reader />} />
        </Routes>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === '#library') {
      // Render Library component or scroll to library section
      console.log('Show Library');
      // You can add logic here to show the Library component
    }
  }, [location]);

  return <div className="App">
  <header className="App-header">
    <div className="nav-menu">
      <div className="navbar w-nav">
        <div className="container w-container">
          <a href="#" className="brand w-nav-brand">
            <div className="text-block">Novel Novels</div>
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="#settings" className="nav-link w-nav-link">Settings</a>
          </nav>
          <div className="w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
    <div className='land-container'>
      <p>Transform any novel to a picture book in seconds</p>
      <div className='button-div'>
        <Link to="library" className='button'>
          <p>Try free</p>
        </Link>
      </div>
    </div>
  </header>
</div>; // or return some default content
}

export default App;
