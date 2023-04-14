const mongoose = require('mongoose');

const busOrgSchema = mongoose.Schema({
    owner: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    typeOfBusOrg: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    alarmCompany: {
        type: String,
        required: false,
    },
    telephoneNumber: {
        type: String,
        required: false,
    },
    busOrgDBID: {
        type: String,
        required: true
    },
    occurrences: {
        type: [String],
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('BusOrg', busOrgSchema);