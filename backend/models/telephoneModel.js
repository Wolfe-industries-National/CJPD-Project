const mongoose = require('mongoose');

const telephoneSchema = mongoose.Schema({
    owner: {
        type: String,
        required: false,
    },
    typeOfTelephone: {
        type: String,
        required: false,
    },
    telephoneNumber: {
        type: String,
        required: false,
    },
    telephoneDBID: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Telephone', telephoneSchema);