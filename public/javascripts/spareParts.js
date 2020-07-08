const mongoose = require('mongoose');

const parts = new mongoose.Schema({
    model: {
        type: String,
    },
    year:{
        type: String,
    },
    partname: {
        type : String
    }
})

module.exports = Parts = mongoose.model('parts', parts);