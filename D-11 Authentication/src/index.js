const express = require("express");
const app = express();

const { register, login } = require("./controllers/resgister.controller");
const postController = require("./controllers/post.controller");

module.exports = app;

app.use(express.json());

app.post("/register", register);

app.post("/login", login);

app.use("/posts", postController)

const server = require("./server");
