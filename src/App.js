// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

// Simulate a call to Dropbox or other service that can
// return an image as an ArrayBuffer.

// Use JSFiddle logo as a sample image to avoid complicating
// this example with cross-domain issues.


function createImgURL(prompt, style) {
  prompt = prompt + " no text ";
  prompt = prompt.replace(/ /g,"_");
  return `https://image.pollinations.ai/prompt/${prompt}?width=480&height=480&model=${style}&seed=1&nologo=true`;
}

function createHTMLPages(pages) {
  const HTML_LIST = [];
  for (let i = 0; i < pages.length; i++) {
    if (i % 6 === 0) {
      const pageImg = createImgURL(pages[i], "flux");
    HTML_LIST[i] = (
    <div>
      <img src={pageImg} alt="AI-Generated-Image"/>
      <p>{pages[i]}</p>
    </div>)
    } else {
      HTML_LIST[i] = (<div>
        <p>{pages[i]}</p>
      </div>)
    }
  }
  return HTML_LIST;
}

function App() {
  const [pages, setPages] = useState("");  
  useEffect(() => {
    fetch("http://localhost:8080/get_pages")
      .then((res) => res.json())
      .then((data) => setPages(data.pages));
  }, []);

  const HTML_BOOK_PAGES = createHTMLPages(pages);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="nav-menu">
            <div className="navbar w-nav">
              <div className="container w-container">
                <a href="#" className="brand w-nav-brand">
                  <div className="text-block">storyAI</div>1
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
        </div>
        
      </header>
      <p>{HTML_BOOK_PAGES}</p>
    </div>
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
