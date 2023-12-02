const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const DataEng = require("./eng");
const DataRu = require("./ru");
 
const PORT = process.env.PORT || 3010;
const app = express();

//mongoose.connect("mongodb://127.0.0.1:27017/textbox");

app.use(bodyParser.json());
app.use("/api", require("./api"))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});