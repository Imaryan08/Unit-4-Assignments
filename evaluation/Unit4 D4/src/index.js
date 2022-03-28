const express = require('express')
const app = express();
const port = 8080;
const connect = require('./configs/db')

const userController = require('./controllers/user.controller');
const todoController = require('./controllers/todo.controller');

app.use(express.json());
app.use('/users', userController);
app.use('/todo', todoController);













app.listen(port, async() => {
    try{
        await connect();
        console.log(`server is up and running in port: ${port}`);
    }catch(err){
        console.log({dbError: err.message});
    }
})