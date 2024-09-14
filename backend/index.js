const express = require('express')
const app = express()
require('dotenv').config();

import OpenAI from "openai"; 

if (process.env.OPENAI_API_KEY) {
  // The environment variable is set and not empty
  const openai = new OpenAI({
      dangerouslyAllowBrowser: true,
      apiKey: process.env.OPENAI_API_KEY
  });
  console.log(process.env.OPENAI_API_KEY);
} else {
  console.error('OPENAI_API_KEY is not set.');
}

function ImageGenerator(prompt) {
  
}

ImageGenerator("Please help me");

app.get('/generate_image', (req, res) => {
  const key =  process.env.OPENAI_API_KEY
  console.log(key);
  
  // const {body} = req
  // const {prompt} = body
  return res.json({'test':1})  // return a binary string to later be parsed in a binary string
})

app.listen(8080)