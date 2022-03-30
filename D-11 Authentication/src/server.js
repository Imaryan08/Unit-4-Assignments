const app = require("./index");
const connect = require("./configs/db");
const port = 8080;

module.exports = app.listen(port, async () => {
  try {
    await connect();
    console.log(`server is up and running on port : ${port}`);
  } catch (err) {
    console.log(err.message);
  }
});

