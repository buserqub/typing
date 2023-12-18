const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');




const PORT = process.env.PORT || 3010;
const app = express();




app.use(cors({
  origin: ["http://localhost:301  0"],
  methods: ["GET", "PSOT"],
  credentials: true
}));

app.use(bodyParser.json());
app.use("/api", require("./api"))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});