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
  return `https://image.pollinations.ai/prompt/${prompt}?width=480&height=480&model=${style}&seed=42&nologo=true`;
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
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <div className='navbar-left'>
            <h3>storyAI</h3>
          </div>
          <div className='navbar-right'>
            <h3>Settings</h3>
          </div>
        </div>
        
      </header>
      <p>{HTML_BOOK_PAGES}</p>
    </div>
  );
}

export default App;
