require("dotenv").config();
const express = require("express");
const { PORT, HOST } = process.env;
const app = express();

app.get("/", (req, res) => {
  res.send("this is the first demo of AWS-EC2");
});

app.listen(PORT, HOST, () => {
  console.log(`listening on port ${PORT}`);
});
