// server
const { create } = require('domain');
const express = require('express')
const cors = require("cors");
const app = express()

app.use(express.json())
app.use(cors());

const fs = require("fs");

function getText(path) {
  return fs.readFileSync("..\\assets\\books\\old-man-and-the-sea.txt", { encoding: 'utf8', flag: 'r' }); 
}

OLD_MAN = getText('..\\assets\\books\\old-man-and-the-sea.txt');

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

OLD_MAN_PAGES = createPages(OLD_MAN, 500)

app.get("/message", (req, res) => {
  res.json({ pages: OLD_MAN_PAGES });
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});
