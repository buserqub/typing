const express = require("express");
const bodyParser = require("body-parser")
 
const PORT = process.env.PORT || 3010;
const app = express();

const mysql = require("mysql2");

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use("/api", require("./api"))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});