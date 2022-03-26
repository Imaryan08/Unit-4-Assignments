const express = require("express");
const app = express();

const connect = require("./configs/db");
const userController = require('./controllers/user.controller');

app.use(express.json());
app.use('/users', userController);

module.exports = async() => {
    await connect();
    
    app.listen(8080, () => {
        console.log(`server is up and running or port: 8080`);
    }); 
};


