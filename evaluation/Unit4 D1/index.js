const express = require("express");
const app = express();

app.get("/books", logger, (req, res) => {
  return res.send({ route: "/books" });
});

app.get("/libraries", checkPermission("librarian"), (req, res) => {
  return res.send({ route: req.path, permission: req.permission });
});

app.get("/authors", checkPermission("author"), (req, res) => {
  return res.send({ route: req.path, permission: req.permission });
});

//middleware for /books
function logger(req, res, next) {
  console.log(req.path);
  next();
}

// middleware for /authors and /libraries
function checkPermission(permission) {
  return function (req, res, next) {
    if (req.path === "/libraries" || req.path === "/authors") {
      req.permission = true;
      next();
    }
  };
}

// function checkPermission(permission) {
//   return function (req, res, next) {
//     if (permission === "librarian" || permission === "author") {
//       if (req.path === "/libraries" || req.path === "/authors") {
//         req.permission = true;
//         next();
//       }
//     }
//   };
// }

app.listen(8080, () => {
  console.log("listening port 8080");
});
