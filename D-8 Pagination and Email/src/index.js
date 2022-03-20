const express = require("express");

const app = express();

const userControllers = require("./controllers/user.controllers");

app.use(express.json());

app.use('/users', userControllers);

const connect = require("./config/db");

module.exports = app;
