const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const EngSchema = new Schema({
    text: String,
    symbols: Array,
    frequency: Array
})
const Eng = mongoose.model("eng", EngSchema);

module.exports = Eng;