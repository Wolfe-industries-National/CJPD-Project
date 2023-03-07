const asyncHandler = require('express-async-handler');

const Form = require('../models/formModel');
const Property = require("../models/propertyModel");

// @desc    Create new Form
// @route   POST /api/v1/form/
// @access  Private
const createForm = asyncHandler(async (req, res) => {
    const {investigatorName, agency, fileNumber, reportedDate,occurrenceBetweenDate,
        natureOfEvent, complaintTakenBy, unistAssisting, ambulance, fire, other, location,
        badgeNumber, zone, unitWatch, priority, differentAddress, dateOfBirth, age, height,
        weight, hair, eyes, race, placeOfBirth, personOfInterest, photoNumber, bookingNumber,
        citizenship, deformityOrOther, build, complexion, alias, occupation, employer,
        otherDescription, vehicleStatus, vehicleNumber, vehicleType, vehicleLicenseNumber,
        vehicleProvince, vehicleLicenceYear, vehicleMake, vehicleYear, vehicleModel,
        vehicleStyle, vehicleVin, vehicleVoltageNumber, vehicleTopColor, vehicleBottomColor,
        vehicleEstimatedValue, vehicleNumberOfOccupants, vehicleInteriorFeatures, vehicleExteriorFeatures,
        vehicleLocation, vehicleDisposition, phoneNumber, postalCode, goodsAndItemsDescription,
        itemsOwnership, criminalSignature, witnessName, occurrenceNumber, actionTaken, concluded,
        dateComplainant, supervisor, department, exhibitsSeizedBy, dateSeized, locationOfSeizure,
        itemNumber, itemDescription, supervisorSignature, exhibitItem, movementTo, recipient,
        initials, suspectHistory, suspectHistoryNotes, complainant, complainantNotes, complainFuture,
        complainantFutureNotes, flags, formType
    } = req.body;

    // Validation
    if(!investigatorName || !agency || !fileNumber || !reportedDate || !occurrenceBetweenDate || !natureOfEvent ||
    !ambulance || !fire || !location )
    {
        res.status(400);
        throw new Error('Please fill all required fields');
    }

    // Create Form
    const form = await Form.create({
        investigatorName,
        agency,
        fileNumber,
        reportedDate,
        occurrenceBetweenDate,
        natureOfEvent,
        complaintTakenBy,
        unistAssisting,
        ambulance,
        fire,
        other,
        location,
        badgeNumber,
        zone,
        unitWatch,
        priority,
        differentAddress,
        dateOfBirth,
        age,
        height,
        weight,
        hair,
        eyes,
        race,
        placeOfBirth,
        personOfInterest,
        photoNumber,
        bookingNumber,
        citizenship,
        deformityOrOther,
        build,
        complexion,
        alias,
        occupation,
        employer,
        otherDescription,
        vehicleStatus,
        vehicleNumber,
        vehicleType,
        vehicleLicenseNumber,
        vehicleProvince,
        vehicleLicenceYear,
        vehicleMake,
        vehicleYear,
        vehicleModel,
        vehicleStyle,
        vehicleVin,
        vehicleVoltageNumber,
        vehicleTopColor,
        vehicleBottomColor,
        vehicleEstimatedValue,
        vehicleNumberOfOccupants,
        vehicleInteriorFeatures,
        vehicleExteriorFeatures,
        vehicleLocation,
        vehicleDisposition,
        phoneNumber,
        postalCode,
        goodsAndItemsDescription,
        itemsOwnership,
        criminalSignature,
        witnessName,
        occurrenceNumber,
        actionTaken,
        concluded,
        dateComplainant,
        supervisor,
        department,
        exhibitsSeizedBy,
        dateSeized,
        locationOfSeizure,
        itemNumber,
        itemDescription,
        supervisorSignature,
        exhibitItem,
        movementTo,
        recipient,
        initials,
        suspectHistory,
        suspectHistoryNotes,
        complainant,
        complainantNotes,
        complainFuture,
        complainantFutureNotes,
        flags,
        formType
    })

    if(form){
        res.status(201).json({
            _id: form._id,
            investigatorName: form.investigatorName,
            agency: form.agency,
            fileNumber: form.fileNumber,
            reportedDate: form.reportedDate,
            occurrenceBetweenDate: form.occurrenceBetweenDate,
            natureOfEvent: form.natureOfEvent,
            complaintTakenBy: form.complaintTakenBy,
            unistAssisting: form.unistAssisting,
            ambulance: form.ambulance,
            fire: form.fire,
            other: form.other,
            location: form.location,
            badgeNumber: form.badgeNumber,
            zone: form.zone,
            unitWatch: form.unitWatch,
            priority: form.priority,
            differentAddress: form.differentAddress,
            dateOfBirth: form.dateOfBirth,
            age: form.age,
            height: form.height,
            weight: form.weight,
            hair: form.hair,
            eyes: form.eyes,
            race: form.race,
            placeOfBirth: form.placeOfBirth,
            personOfInterest: form.personOfInterest,
            photoNumber: form.phoneNumber,
            bookingNumber: form.bookingNumber,
            citizenship: form.citizenship,
            deformityOrOther: form.deformityOrOther,
            build: form.build,
            complexion: form.complexion,
            alias: form.alias,
            occupation: form.occupation,
            employer: form.employer,
            otherDescription: form.otherDescription,
            vehicleStatus: form.vehicleStatus,
            vehicleNumber: form.vehicleNumber,
            vehicleType: form.vehicleType,
            vehicleLicenseNumber: form.vehicleLicenseNumber,
            vehicleProvince: form.vehicleProvince,
            vehicleLicenceYear: form.vehicleLicenceYear,
            vehicleMake: form.vehicleMake,
            vehicleYear: form.vehicleYear,
            vehicleModel: form.vehicleModel,
            vehicleStyle: form.vehicleStyle,
            vehicleVin: form.vehicleVin,
            vehicleVoltageNumber: form.vehicleVoltageNumber,
            vehicleTopColor: form.vehicleTopColor,
            vehicleBottomColor: form.vehicleBottomColor,
            vehicleEstimatedValue: form.vehicleEstimatedValue,
            vehicleNumberOfOccupants: form.vehicleNumberOfOccupants,
            vehicleInteriorFeatures: form.vehicleInteriorFeatures,
            vehicleExteriorFeatures: form.vehicleExteriorFeatures,
            vehicleLocation: form.vehicleLocation,
            vehicleDisposition: form.vehicleDisposition,
            phoneNumber: form.phoneNumber,
            postalCode: form.postalCode,
            goodsAndItemsDescription: form.goodsAndItemsDescription,
            itemsOwnership: form.itemsOwnership,
            criminalSignature: form.criminalSignature,
            witnessName: form.witnessName,
            occurrenceNumber: form.occurrenceNumber,
            actionTaken: form.actionTaken,
            concluded: form.concluded,
            dateComplainant: form.dateComplainant,
            supervisor: form.supervisor,
            department: form.department,
            exhibitsSeizedBy: form.exhibitsSeizedBy,
            dateSeized: form.dateSeized,
            locationOfSeizure: form.locationOfSeizure,
            itemNumber: form.itemNumber,
            supervisorSignature: form.supervisorSignature,
            exhibitItem: form.exhibitItem,
            movementTo: form.movementTo,
            recipient: form.recipient,
            initials: form.initials,
            suspectHistory: form.suspectHistory,
            suspectHistoryNotes: form.suspectHistoryNotes,
            complainant: form.complainant,
            complainantNotes: form.complainantNotes,
            complainFuture: form.complainFuture,
            complainantFutureNotes: form.complainantFutureNotes,
            flags: form.flags,
            formType: form.formType
        })
    }else{
        res.status(400);
        throw new Error('Invalid form data');
    }
});

// @desc    Get all forms
// @route   GET /api/v1/form/
// @access  Private
const getAllForms = asyncHandler(async (req, res) => {

    const forms = await Form.find();

    res.status(200).json(forms);
});

// @desc    Get a specific form
// @route   GET /api/v1/form/:id
// @access  Private
const getForm = asyncHandler(async (req, res) => {

    const form = await Form.findById(req.params.id);

    if(!form){
        res.status(401);
        throw Error('form not found');
    }

    res.status(200).json(form);
});

module.exports = {
    createForm,
    getAllForms,
    getForm
}