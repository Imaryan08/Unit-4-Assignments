const express = require("express");
const port = 8080;
const app = express();
const connect = require("./configs/db");


//controllers
const submissionController = require("./controllers/submission.controller");
const userController = require("./controllers/user.controllers");
app.use(express.json());
app.use("/submissions", submissionController);
app.use("/users", userController);

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log(`server is up and running on port:${port}`);
  } catch (err) {
    console.log({ err: err.message });
  }
});
