// server
const express = require('express')
const app = express()
require('dotenv').config();
// const cors = require('cors');
// app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies
const axios = require('axios');
const path = require('path');
const port = 5000;

async function ImageGenerator(prompt) {
  prompt = prompt.concat("width=1280&height=720&nologo=true&enhance=true")
  const url = `https://pollinations.ai/p/${prompt}`;
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    console.log(response["data"]);
  } catch (error) {
    console.error('Error downloading the image:', error);
  }
}

ImageGenerator("Please help me");

app.get('/generate_image', (req, res) => {
  return res.json({image: ImageGenerator("Fun")})  // return a binary string to later be parsed in a binary string
})

app.listen(8080)
