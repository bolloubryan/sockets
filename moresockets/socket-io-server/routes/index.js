const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send({ response: "I am alive" }).status(200);
});

router.post("/", (req, res) => {
  return res.send({response:'POST request to the homepage'}).status(200);
});

router.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
  return res.send("Secret")
})

module.exports = router;