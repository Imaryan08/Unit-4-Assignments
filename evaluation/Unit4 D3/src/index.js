const express = require("express");
const app = express();


// const Book = require('./models/book.model');
// const Publication = require('./models/publication.model');
// const Comment = require('./models/comment.model');


const userController = require('./controllers/user.controller');



app.use(express.json());

app.use('/user', userController);

const server = require('./server');