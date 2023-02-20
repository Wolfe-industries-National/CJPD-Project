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
    flags: {
        type: String,

    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Person', personSchema);