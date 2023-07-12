const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const textSchema = new Schema({
    text: String,
    symbols: Array,
    frequency: Array
});

const text = mongoose.model("text", textRusSchema);