const express = require("express");
const app = express();

const port = 8080;

const connect = require('./configs/db');
// const Book = require('./models/book.model');
// const Publication = require('./models/publication.model');
// const Comment = require('./models/comment.model');


const userController = require('./controllers/user.controller');
const bookController = require('./controllers/book.controller');
const publicationController = require('./controllers/publication.controller');
const commentController = require('./controllers/comment.controller');



app.use(express.json());

app.use('/user', userController);
app.use('/book', bookController);
app.use('/comment', commentController);
app.use('/publication', publicationController);

// const server = require('./server');



app.listen(port, async(req,res) => {
    try{
        await connect();
        console.log(`server is up and running on port:${port}`);
    }catch(err){
        console.log({errMessage: err.message});
    }
})