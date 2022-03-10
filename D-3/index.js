const express = require("express");
const port = 8081;
const app = express();

app.get("/books", allBooks, (req, res) => {
  return res.send("Fetching all books");
});

app.get("/books/:name", singleBook, (req, res) => {
  return res.send( {bookName:req.name} )
});

//middleware
function allBooks(req, res, next) {
  console.log(`Fetching all books`);
  next();
}

function singleBook(req, res, next) {
  req.name = req.params.name;
  next();
}

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is up and running on port: ${port}`);
});
