const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("Hello");
});

const books = {
  the_maid: "Nita prose",
  two_states: "chetan bhagat",
  internet: "ankit fadia",
  do_epic_shit: "ankur wariko",
};

app.get("/books", (req, res) => {
  res.send(JSON.stringify(books));
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
