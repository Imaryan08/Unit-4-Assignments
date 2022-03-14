const app = require("./index.js");
const port = 8000;
const connect = require("./configs/database.js");

app.listen(port, async () => {
  try {
    await connect();
    console.log(`server is up on port: ${port}`);
  } catch (err) {
    console.log(err);
  }
});