const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
    owner: {
        type: String,
        required: [true, "Please add an owner"],
    },
    typeOfProperty: {
        type: String,
        required: [true, "Please add a type of property"],
    },
    vinOfProperty: {
        type: String,
        required: [true, "Please add a Serial Number / VIN"],
    },
    valueOfProperty: {
        type: String,
        required: [true, "Please add a value to property "],
    },
    descriptionOfProperty: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Property', propertySchema);