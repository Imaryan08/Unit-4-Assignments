const express = require('express');
const port = 8080;
const app = express();

const connect = require('./config/db');

const User = require('./models/user.models');

app.listen(port, async(req,res) => {
    try{
        await connect();
        console.log(`server is up and running on port:${port}`);
    }catch(err){
        console.log({err: err.message});
    }
})
