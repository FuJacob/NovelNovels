// server

const express = require('express')
const app = express()
require('dotenv').config();
const OpenAI = require("openai");

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  apiKey: process.env.OPENAI_API_KEY
});

// Generate image using open ai
async function ImageGenerator(prompt) {
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt: "a white siamese cat",
    n: 1,
  });
  console.log(image.data[0].url);
}

ImageGenerator("Please help me");

app.get('/generate_image', (req, res) => {
  
  // const {body} = req
  // const {prompt} = body
  return res.json({'test':1})  // return a binary string to later be parsed in a binary string
})

app.listen(8080)