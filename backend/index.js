// server
const express = require('express')
const app = express()
require('dotenv').config();
// const cors = require('cors');
// app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies
const OpenAI = require("openai");
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


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Generate image using open ai
/* async function ImageGenerator(prompt) {
  
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt: "a white siamese cat",
    n: 1,
    response_format: "b64_json"
  }); // this was with open ai

  url = String.format("https://pollinations.ai/p/{0}", prompt);

  console.log(image.data);
} */

ImageGenerator("Please help me");

app.get('/generate_image', (req, res) => {
  
  // const {body} = req
  // const {prompt} = body
  return res.json({image: ImageGenerator("Fun")})  // return a binary string to later be parsed in a binary string
})

app.listen(8080)