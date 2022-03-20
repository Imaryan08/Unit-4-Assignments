const app = require("./index");

const connect = require("./config/db");

const port = 8080;

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log(`server is up and running on port:${port}`);
  } catch (err) {
    console.log({ err: err.message });
  }
});
