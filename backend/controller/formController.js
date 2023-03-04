const asyncHandler = require('express-async-handler');

const Form = require('../models/formModel');

// @desc    Create new Form
// @route   POST /api/v1/form/
// @access  Private
const createForm = asyncHandler(async (req, res) => {
    const {investigatorName, agency, fileNumber, reportedDate,occurrenceBetweenDate,
        natureOfEvent, complaintTakenBy, unistAssisting, ambulance, fire, other, location,
        badgeNumber, zone, UnitWatch, Priority, differentAddress, dateOfBirth, age, height,
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
        UnitWatch,
        Priority,
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

});