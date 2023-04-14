const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    owner: {
        type: String,
        required: false,
    },
    typeOfBuilding: {
        type: String,
        required: false,
    },
    vacant: {
        type: Boolean,
        required: false,
    },
    country: {
        type: String,
        required: false,
    },
    province: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    addressDBID: {
        type: String,
        required: true,
    },
    occurrences: {
        type: [String],
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Address', addressSchema);