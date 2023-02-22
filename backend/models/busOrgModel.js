const mongoose = require('mongoose');

const busOrgSchema = mongoose.Schema({
    owner: {
        type: String,
        required: [true, "Please add an owner"],
    },
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    typeOfBusOrg: {
        type: String,
        required: [true, "Please add a type of Business or Organization"]
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
    },
    alarmCompany: {
        type: String,
        required: [true, "Please add an alarm company"]
    },
    telephoneNumber: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Telephone'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('BusOrg', busOrgSchema);