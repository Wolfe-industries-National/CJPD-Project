const mongoose = require('mongoose');

const occurrenceSchema = mongoose.Schema({
    fileNumber: {
        type: String,
        required: [true, "Please add a file number"],
    },
    summary: {
        type: String,
        required: [true, "Please add a Summary"],
    },
    person: {
        type: String,
        required: false,
    },
    busOrg: {
        type: [String],
        required: false,
    },
    property: {
        type: [String],
        required: false,
    },
    vehicle: {
        type: [String],
        required: false,
    },
    telephone: {
        type: [String],
        required: false,
    },
    officerUnit: {
        type: [String],
        required: false,
    },
    address: {
        type: [String],
        required: false,
    },
    occurrenceDBID: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Occurrence', occurrenceSchema);