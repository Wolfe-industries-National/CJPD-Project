const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    dateOfBirth: {
        type: Date,
        required: false,
    },
    telephone: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    fps: {
        type: String,
        required: false,
    },
    height: {
        type: String,
        required: false,
    },
    weight: {
        type: String,
        required: false,
    },
    aliases: {
        type: [String],
        required: false,
    },
    associatedVehicles: {
        type: [String],
        required: false,
    },
    associates: {
        type: [String],
        required: false,
    },
    flags: {
        type: [String],
        required: false,
    },
    tattoos: {
        type: [String],
        required: false,
    },
    hairColour: {
        type: String,
        required: false,
    },
    eyeColour: {
        type: String,
        required: false,
    },
    personDBID: {
        type: String,
        required: false
    },
    occurrences: {
        type: [String],
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Person', personSchema);