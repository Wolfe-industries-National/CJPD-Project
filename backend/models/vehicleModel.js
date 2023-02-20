const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    owner: {
        type: String,
        required: [true, "Please add an owner"],
    },
    makeOfVehicle: {
        type: String,
        required: [true, "Please add a make"],
    },
    modelOfVehicle: {
        type: String,
        required: [true, "Please add a model"],
    },
    yearOfVehicle: {
        type: Number,
        required: [true, "Please add a year"],
    },
    colourOfVehicle: {
        type: String,
        required: [true, "Please add a colour"],
    },
    vinOfVehicle: {
        type: String,
        required: [true, "Please add a VIN"],
    },
    typeOfBuilding: {
        type: String,
        required: [true, "Please add a type of building"],
    },
    plateOfVehicle: {
        type: String,
        required: [true, "Please add a Plate"],
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Vehicle', vehicleSchema);