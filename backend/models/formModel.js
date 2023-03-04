const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    investigatorName: {
        type: String,
        required: [true, "Please add name of investigator"]
    },
    agency: {
        type: String,
        required: [true, "Please fill an agency"]
    },
    fileNumber: {
        type: Number,
        required: [true, "Please identify the file number"]
    },
    reportedDate: {
        type: Date,
        required: [true, "Please fill the date reported"]
    },
    occurrenceBetweenDate: {
        type: Date,
        required: [true, "Please fill the time between"]
    },
    natureOfEvent: {
        type: String,
        required: [true, "Please fill the nature of the event"]
    },
    complaintTakenBy: {
        type: String,
    },
    unistAssisting: {
        type: String,
    },
    ambulance: {
        type: String,
        required: [true, "Please choose an option "]
    },
    fire: {
        type: String,
        required: [true, "Please choose an option "]
    },
    other: {
        type: Date,
    },
    location: {
        type: String,
        required: [true, "Please fill the location"]
    },
    badgeNumber: {
        type: Number,
    },
    zone: {
        type: String,
    },
    UnitWatch: {
        type: String,
    },
    Priority: {
        type: Boolean,
    },
    differentAddress: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    age: {
        type: Number,
    },
    height: {
        type: String,
    },
    weight: {
        type: Number,
    },
    hair: {
        type: String,
    },
    eyes: {
        type: String,
    },
    race: {
        type: String,
    },
    placeOfBirth: {
        type: String,
    },
    personOfInterest: {
        type: String,
    },
    photoNumber: {
        type: Number,
    },
    bookingNumber: {
        type: String,
    },
    citizenship: {
        type: String,
    },
    deformityOrOther: {
        type: String,
    },
    build: {
        type: String,
    },
    complexion: {
        type: String,
    },
    alias: {
        type: String,
    },
    occupation: {
        type: String,
    },
    employer: {
        type: String,
    },
    otherDescription: {
        type: String,
    },
    vehicleStatus: {
        type: String,
    },
    vehicleNumber: {
        type: Number,
    },
    vehicleType: {
        type: String,
    },
    vehicleLicenseNumber: {
        type: String,
    },
    vehicleProvince: {
        type: String,
    },
    vehicleLicenceYear: {
        type: String,
    },
    vehicleMake: {
        type: String,
    },
    vehicleYear: {
        type: Number,
    },
    vehicleModel: {
        type: String,
    },
    vehicleStyle: {
        type: String,
    },
    vehicleVin: {
        type: String,
    },
    vehicleVoltageNumber: {
        type: Number,
    },
    vehicleTopColor: {
        type: String,
    },
    vehicleBottomColor: {
        type: String,
    },
    vehicleEstimatedValue: {
        type: String,
    },
    vehicleNumberOfOccupants: {
        type: Number,
    },
    vehicleInteriorFeatures: {
        type: String,
    },
    vehicleExteriorFeatures: {
        type: String,
    },
    vehicleLocation: {
        type: String,
    },
    vehicleDisposition: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    postalCode: {
        type: String,
    },
    goodsAndItemsDescription: {
        type: String,
    },
    itemsOwnership: {
        type: Boolean,
    },
    criminalSignature: {
        type: String,
    },
    witnessName: {
        type: String,
    },
    occurrenceNumber: {
        type: Number,
    },
    actionTaken: {
        type: String,
    },
    concluded: {
        type: Boolean,
    },
    dateComplainant: {
        type: Date,
    },
    supervisor: {
        type: String,
    },
    department: {
        type: String,
    },
    exhibitsSeizedBy: {
        type: String,
    },
    dateSeized: {
        type: Date,
    },
    locationOfSeizure: {
        type: String,
    },
    itemNumber: {
        type: String,
    },
    itemDescription: {
        type: String,
    },
    supervisorSignature: {
        type: String,
    },
    exhibitItem: {
        type: String,
    },
    movementTo: {
        type: String,
    },
    recipient: {
        type: String,
    },
    initials: {
        type: String,
    },
    suspectHistory: {
        type: Boolean,
    },
    suspectHistoryNotes: {
        type: String,
    },
    complainant: {
        type: Boolean,
    },
    complainantNotes: {
        type: String,
    },
    complainFuture: {
        type: Boolean,
    },
    complainantFutureNotes: {
        type: String,
    },
    flags: {
        type: String,
    },
    formType: {
        type: String,
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Form', formSchema);