const express = require("express");
const cors = require("cors");
const https = require("https");
const fs = require("fs");

const versionList = require("./version.json");

const app = express();
app.use(cors());
const port = 3000;

app.get("/appVersion", (req, res) => {
  res.send(versionList);
});

if(process.env.NODE_ENV === "https") {
  https
  .createServer(
    // Provide the private and public key to the server by reading each
    // file's content with the readFileSync() method.
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("frankyya_com.crt"),
    },
    app
  )
  .listen(port, () => {
    console.log(`[https]: serever is runing at port ${port}`);
  });
} else {
  app.listen(port, () => {
    console.log(`[http]: serever is runing at port ${port}`);
  });
}



