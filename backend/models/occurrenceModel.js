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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Person'
    },
    busOrg: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'BusOrg'
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Property'
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Vehicle'
    },
    telephone: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Telephone'
    },
    officerUnit: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'OfficerUnit'
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Occurrence', occurrenceSchema);