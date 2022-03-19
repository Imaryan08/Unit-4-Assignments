const express = require('express');

const app = express();

const connect = require("./configs/db");

app.listen(6000, async () => {
  try {
    await connect();
    console.log("server is up and runnign on port: 6000");
  } catch (err) {
    console.log({ errMsg: err.message });
  }
});
