const mongoose = require('mongoose');

const officerUnitSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    regimentalNumber: {
        type: String,
        required: false,
    },
    rank: {
        type: String,
        required: false,
    },
    unit: {
        type: Number,
        required: false,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('OfficerUnit', officerUnitSchema);