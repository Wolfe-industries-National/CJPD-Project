const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Please add a Date of Birth"],
    },
    telephone: {
        type: String,
        required: true,
        ref: 'Telephone'
    },
    address: {
        type: String,
        required: true,
        ref: 'Address'
    },
    fps: {
        type: String,
    },
    height: {
        type: String,
    },
    weight: {
        type: String,
    },
    aliases: {
        type: [String],
    },
    associatedVehicles: {
        type: [String],
        required: true,
        ref: 'Vehicle'
    },
    associates: {
        type: [String],
        required: false,
        ref: 'Person'
    },
    flags: {
        type: [String],
    },
    tattoos: {
        type: [String],
    },
    hairColour: {
        type: String,
    },
    eyeColour: {
        type: String,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Person', personSchema);