import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:8080/generate_image')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

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
      <p>{data}</p>
    </div>
  );
}

export default App;
