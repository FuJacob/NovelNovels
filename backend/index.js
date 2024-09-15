// server
const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');

const path = require('path');
const port = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

async function ImageGenerator(prompt) {
  prompt = prompt.concat("width=1280&height=720&nologo=true&enhance=true")
  const url = `https://pollinations.ai/p/${prompt}`;
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return buffer;
  } catch (error) {
    console.error('Error getting the image:', error);
  }
}

ImageGenerator("Fun");

app.get('/generate_image', (req, res) => {
  const imgData = ImageGenerator('Fun');
  console.log(typeof(imgData));
  res.json({ imageData: imgData })  // return a binary string to later be parsed in a binary string
})

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});