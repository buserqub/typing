const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const RuSchema = new Schema({
    text: String,
    symbols: Array,
    frequency: Array
})
const Ru = mongoose.model("ru", RuSchema);

module.exports = Ru;