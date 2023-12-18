const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');

const PORT = process.env.PORT || 3010;
const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(
  session({
    key: "userId",
    secret: "buser",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 3600
    }
  })
);

app.use("/api", require("./api"))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});