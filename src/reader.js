import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';
import './fonts.css';
import './App.js';

function createImgURL(prompt, style) {
    prompt = prompt + " no text ";
    prompt = prompt.replace(/ /g,"_");
    return `https://image.pollinations.ai/prompt/${prompt}?width=480&height=480&model=${style}&seed=1&nologo=true`;
}

function createHTMLPages(pages) {
    const HTML_LIST = [];
    for (let i = 0; i < pages.length; i++) {
        const pageImg = createImgURL(pages[i], "flux");
        HTML_LIST[i] = (
        <div className="demoPage">
            <h2>Page {i+1}</h2>
            <div><img src={pageImg} alt="AI-Generated-Image"/></div>
            
            <p>{pages[i]}</p>
        </div>)
      
    }
    return HTML_LIST;
}

function Reader() {
    const Number = 0;
    const [pages, setPages] = useState("");  
    useEffect(() => {
        fetch(`http://localhost:8080/get_pages/${Number}`)
        .then((res) => res.json())
        .then((data) => setPages(data.pages));
    }, []);
    const HTML_BOOK_PAGES = createHTMLPages(pages);

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

        <HTMLFlipBook width={300} height={500}>
            {createHTMLPages(pages)}
        </HTMLFlipBook>

        </header>

        
      </div>
    );
  }
  
  export default Reader;

  /*
  <div className='library-container'>
    <h1>Reader</h1>
    <p>Welcome to your personal library. Here you can view and manage your books.</p>
    <div className="book-list">
        <div className="book-item">Book 1</div>
        <div className="book-item">Book 2</div>
        <div className="book-item">Book 3</div>
    </div>
    <Link to="/" className="back-button">Back to Home</Link>
    </div> 
  */