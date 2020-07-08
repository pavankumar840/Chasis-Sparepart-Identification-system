const mongoose = require('mongoose');

const location = new mongoose.Schema({
    location: {
        type: String,
    }
    
})

module.exports = Message = mongoose.model('locations', location);