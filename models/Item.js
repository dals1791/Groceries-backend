const mongoose = require("../db/connection")

const Schema = mongoose.Schema

// make schema for items
const itemSchema = new Schema(
    {
        name: String,
        qty: Number,
        category: {type: String, required: false},
        found: {type: Boolean, default: false}
    },
    { timestamps: true }
)

const Item = mongoose.model("items", itemSchema)

module.exports = Item