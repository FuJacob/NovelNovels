// server
const { create } = require('domain');
const express = require('express')
const cors = require("cors");
const app = express()
const books = require("./books.js")

app.use(express.json())
app.use(cors());

function createPages(text, perpage) {
  const textLength = text.length;
  const pages = [];
  var page = 0;
  var bottom_index = 0;
  for (let i = perpage; i < textLength; i = i + perpage) {
    var SPACE_FOUND = false;
    var j = i;
    if (i != 0) {
      while (SPACE_FOUND == false) {
        if (text[j] == ' ') {
          SPACE_FOUND = true;
        } else {
          j --;
        }
      }
    }
    
    pages[page] = text.substring(bottom_index, j);
    page ++;
    bottom_index = j+1;
  }
  pages[page] = text.substring(bottom_index, textLength);
  return pages;
}

app.get("/get_pages/0", (req, res) => {
  res.json({ pages: createPages(books.BOOKS[0].getText(), 500) });
});

app.get("/get_pages/1", (req, res) => {
  res.json({ pages: createPages(books.BOOKS[1].getText(), 500) });
});

app.get("/get_pages/2", (req, res) => {
  res.json({ pages: createPages(books.BOOKS[2].getText(), 500) });
});

app.get("/get_pages/3", (req, res) => {
  res.json({ pages: createPages(books.BOOKS[3].getText(), 500) });
});

app.get("/get_pages/4", (req, res) => {
  res.json({ pages: createPages(books.BOOKS[4].getText(), 500) });
});

app.get("/get_pages/5", (req, res) => {
  res.json({ pages: createPages(books.BOOKS[5].getText(), 500) });
});

app.get("/get_pages/6", (req, res) => {
  res.json({ pages: createPages(books.BOOKS[6].getText(), 500) });
});

app.get("/get_pages/7", (req, res) => {
  res.json({ pages: createPages(books.BOOKS[7].getText(), 500) });
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});
