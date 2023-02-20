const mongoose = require('mongoose');

const occurrenceSchema = mongoose.Schema({
    fileNumber: {
        type: String,
        required: [true, "Please add a file number"],
    },
    summary: {
        type: String,
        required: [true, "Please add a Summary"],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Occurrence', occurrenceSchema);