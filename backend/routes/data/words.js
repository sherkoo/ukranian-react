const home = require("./home.js");
const food = require("./food.js");
const family = require("./family.js");
const verbs1 = require("./verbs1.js");
const pronouns = require("./pronouns.js");
const greetings = require("./greetings.js");
const phrases = require("./phrases.js");
const alphabet = require("./alphabet.js");

module.exports = [
  {
    category: "๐ฌ Phrases ",
    words: phrases
  },
  {
    category: "๐ค Alphabet ",
    words: alphabet
  },
  {
    category: "๐จโ๐ฉโ๐งโ๐ฆ Family",
    words: family
  },
  {
    category: "๐ก Home",
    words: home
  },
  {
    category: "๐ Food",
    words: food
  },
  {
    category: "๐๐พโโ๏ธ Verbs1",
    words: verbs1
  },
  {
    category: "๐ง Pronouns ",
    words: pronouns
  },
  
];
