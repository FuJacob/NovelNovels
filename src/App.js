import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  function generateRandomImage(prompt) {
    
  } 

  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <div className='navbar-left'>
            <h3>storyAI</h3>
          </div>
          <div className='navbar-right'>
            <h3>Settings</h3>
            <p>hello</p>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
