const mongoose = require('mongoose');

const telephoneSchema = mongoose.Schema({
    owner: {
        type: String,
        required: [true, "Please add an owner"],
    },
    typeOfTelephone: {
        type: String,
        required: [true, "Please add an type of telephone"],
    },
    telephoneNumber: {
        type: String,
        required: [true, "Please add an Telephone number"],
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Telephone', telephoneSchema);