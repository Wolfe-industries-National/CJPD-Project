const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    owner: {
        type: String,
        required: [true, "Please add an owner"],
    },
    typeOfBuilding: {
        type: String,
        required: [true, "Please add a type of building"],
    },
    vacant: {
        type: Boolean,
        required: [true, "Please add a Vacant"],
    },
    country: {
        type: String,
        required: [true, "Please add a Country"],
    },
    city: {
        type: String,
        required: [true, "Please add a City"],
    },
    address: {
        type: String,
        required: [true, "Please add an address"],
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Address', addressSchema);