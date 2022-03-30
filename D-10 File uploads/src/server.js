const express = require("express");
const app = express();

const connect = require("./configs/db");

module.exports = async () => {
  await connect();

  app.listen(8080, () => {
    console.log(`server is up and running on port: 8080`);
  });
};
