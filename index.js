const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    data: "Hello",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
