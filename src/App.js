// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

// Simulate a call to Dropbox or other service that can
// return an image as an ArrayBuffer.
var xhr = new XMLHttpRequest();


// Use JSFiddle logo as a sample image to avoid complicating
// this example with cross-domain issues.


async function createImgURL(prompt, style) {
  prompt.replace(/ /g,"_");
  return `https://image.pollinations.ai/prompt/{prompt}?width=1280&height=720&model={style}&seed=42&nologo=true`
}

function App() {
  const [data, setData] = useState([]);
  
  const imgurl = createImgURL("Fun", "flux");


  /*
  useEffect(() => {
    // Fetch data from the backend
    console.log(`http://localhost:8080/generate_image`);
    fetch(`http://localhost:8080/generate_image`)
      .then((res) => res.json())
      .then((data) => setData(data.imageData));
  }, []);
  console.log(data);
  */

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
      <img src={imgurl}></img>
    </div>
  );
}

export default App;
