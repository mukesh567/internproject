const mongoose = require('mongoose');

const tempSchema = new mongoose.Schema({
    base_unit: {
        type: String,
        unique: true,
    },
    quote_unit: {
        type: String
    },
    low: {
        type: String,

        unique: true
    },
    high: {
        type: String,
        unique: true
    },
    last: {
        type: String
    },
    type: {
        type: String
    },
    open: {
        type: String,

    },
    volume: {
        type: String,

    },
    sell: {
        type: String,

    },
    buy: {
        type: String,

    },
    at: {
        type: String,
    },
    name: {
        type: String,

    }

})


const internNode = new mongoose.model("NodeJS", tempSchema);
module.exports = internNode;