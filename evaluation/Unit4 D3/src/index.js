const express = require("express");
const app = express();

const server = require('./server');

const User = require('./models/user.model');
const Book = require('./models/book.model');
const Publication = require('./models/publication.model');
const Comment = require('./models/comment.model');