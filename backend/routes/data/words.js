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
    category: "💬 Phrases ",
    words: phrases
  },
  {
    category: "🔤 Alphabet ",
    words: alphabet
  },
  {
    category: "👨‍👩‍👧‍👦 Family",
    words: family
  },
  {
    category: "🏡 Home",
    words: home
  },
  {
    category: "🍕 Food",
    words: food
  },
  {
    category: "🏃🏾‍♂️ Verbs1",
    words: verbs1
  },
  {
    category: "🧒 Pronouns ",
    words: pronouns
  },
  
];
