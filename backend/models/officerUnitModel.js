const mongoose = require('mongoose');

const officerUnitSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    regimentalNumber: {
        type: String,
        required: [true, "Please add an regimentalNumber"],
    },
    rank: {
        type: String,
        required: [true, "Please add an rank"],
    },
    unit: {
        type: Number,
        required: [true, "Please add an unit"],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('OfficerUnit', officerUnitSchema);