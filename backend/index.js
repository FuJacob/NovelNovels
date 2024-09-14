const express = require('express')
const app = express()
require('dotenv').config();


// respond with "hello world" when a GET request is made to the homepage
app.get('/generate_image', (req, res) => {
  const key =  process.env.OPENAI_API_KEY
  console.log(key);
  
  // const {body} = req
  // const {prompt} = body
  return res.json({'test':1})
})

app.listen(8080)