const mongoose = require('mongoose');

const leaderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        default: ''
    },
    abbr: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema)

module.exports = Leaders;