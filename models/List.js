const mongoose = require("../db/connection")
const Schema = mongoose.Schema

// create the owner schema
const listSchema = new Schema({
    storeName: {type: String, required: false},
    items: [
        {
            ref: 'items',
            type: Schema.Types.ObjectId,
        },

    ],
})
const List = mongoose.model('lists', listSchema)

module.exports = List