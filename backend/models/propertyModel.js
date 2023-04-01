const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
    owner: {
        type: String,
        required: false,
    },
    typeOfProperty: {
        type: String,
        required: true,
    },
    vinOfProperty: {
        type: String,
        required: false,
    },
    valueOfProperty: {
        type: String,
        required: false,
    },
    descriptionOfProperty: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Property', propertySchema);