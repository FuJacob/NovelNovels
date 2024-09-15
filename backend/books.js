const fs = require("fs");

function Book(title, author, year, path, cover) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.path = path;
    this.getText = function () {
        return fs.readFileSync(this.path, { encoding: 'utf8', flag: 'r' }); 
    }
}

const OLD_MAN_OF_THE_SEA = new Book("The Old Man of the Sea", "William Wymark Jacobs", 1900, "C:..\\assets\\books\\old-man-and-the-sea.txt")
const GOLDEN_BIRD = new Book("The Golden Bird", "Brothers Grimm", 1812, "C:..\\assets\\books\\golden-bird.txt")
const ALICE_IN_WONDERLAND = new Book("Alice in Wonderland", "Lewis Caroll", 1865, "C:..\\assets\\books\\alice-in-wonderland.txt")
const A_MODEST_PROPOSAL = new Book("A Modest Proposal", "Jonathan Swift", 1729, "C:..\\assets\\books\\a-modest-proposal.txt")
const GREAT_GATSBY =  new Book("The Great Gatsby", "Francis Scott Fitzgerald", 1925, "C:..\\assets\\books\\great-gatsby.txt")

module.exports = {
    BOOKS: [OLD_MAN_OF_THE_SEA, GOLDEN_BIRD, ALICE_IN_WONDERLAND]
};