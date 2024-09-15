import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import './fonts.css';
import Library from './Library';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="nav-menu">
            <div className="navbar w-nav">
              <div className="container w-container">
                <a href="#" className="brand w-nav-brand">
                  <div className="text-block">storyAI</div>
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
              <Link to="#library" className='button'>
                <p>Try free</p>
              </Link>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<MainContent />} />
        </Routes>
      </div>
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

  return null; // or return some default content
}

export default App;
