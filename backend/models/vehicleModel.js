const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    owner: {
        type: String,
        required: false,
    },
    makeOfVehicle: {
        type: String,
        required: false,
    },
    modelOfVehicle: {
        type: String,
        required: false,
    },
    yearOfVehicle: {
        type: Number,
        required: false,
    },
    colourOfVehicle: {
        type: String,
        required: false,
    },
    vinOfVehicle: {
        type: String,
        required: false,
    },
    plateOfVehicle: {
        type: String,
        required: false,
    },
    vehicleDBID: {
        type: String,
        required: true
    },
    occurrences: {
        type: [String],
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Vehicle', vehicleSchema);