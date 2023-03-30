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
        required: true,
        ref: 'Person'
    },
    busOrg: {
        type: [String],
        required: true,
        ref: 'BusOrg'
    },
    property: {
        type: [String],
        required: true,
        ref: 'Property'
    },
    vehicle: {
        type: [String],
        required: true,
        ref: 'Vehicle'
    },
    telephone: {
        type: [String],
        required: true,
        ref: 'Telephone'
    },
    officerUnit: {
        type: [String],
        required: true,
        ref: 'OfficerUnit'
    },
    address: {
        type: [String],
        required: true,
        ref: 'Address'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Occurrence', occurrenceSchema);