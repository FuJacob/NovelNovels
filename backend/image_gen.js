require('dotenv').config();

import OpenAI from "openai"; 
import './index.css';
 
console.log("Hello world");

function ImageGenerator(prompt) {
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
}

ImageGenerator("Please help me");
