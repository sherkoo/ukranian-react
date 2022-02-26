var express = require("express");
var router = express.Router();
const words = require("./data/words.js");

/* GET all words */
router.get("/", function (req, res, next) {
  res.send(words);
});

/* GET all words by :id */
router.get("/category/:id", function (req, res, next) {
  const results = words.filter((word) => {
    return word.category == req.params.id
  })
  if(results.length > 0){
    res.send(results);
  } else {
    res.sendStatus(404)
  }
});

/* Get all categories */
router.get("/categories", function (req, res, next) {
  const categories = words.map((res) => {
    return res.category;
  })
  res.send(categories);
});

module.exports = router;
