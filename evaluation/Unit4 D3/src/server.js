const express = require("express");
const app = express();
const port = 8080;

const connect = require('./configs/db');

module.exports = app.listen(port, async(req,res) => {
    try{
        await connect();
        console.log(`server is up and running on port:${port}`);
    }catch(err){
        console.log({errMessage: err.message});
    }
})

