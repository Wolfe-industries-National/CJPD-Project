const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Occurrence = require('../models/occurrenceModel');
const Address = require('../models/addressModel');
const BusOrg = require('../models/busOrgModel');
const OfficerUnit = require("../models/officerUnitModel");
const Person = require("../models/personModel");
const Property = require('../models/propertyModel');
const Telephone = require('../models/telephoneModel');
const Vehicle = require('../models/vehicleModel');

// @desc    Create new Occurrence
// @route   POST /api/v1/occurrence/
// @access  Private
const createOccurrence = asyncHandler(async (req, res) => {
    const {fileNumber, summary, person, busOrg, property, vehicle, telephone, officerUnit, address} = req.body;

    // Validation
    if(!fileNumber || !summary){
        res.status(400);
        throw new Error('Please include fileNumber and summary');
    }

    let currentCount = await Occurrence.estimatedDocumentCount();

    do {
        currentCount += 1;
    } while ((await Occurrence.find({occurrenceDBID: `OC_${currentCount}`})).length >= 1);

    // Create BusOrg
    const occurrence = await Occurrence.create({
        fileNumber,
        summary,
        person,
        busOrg,
        property,
        vehicle,
        telephone,
        officerUnit,
        address,
        occurrenceDBID: `OC_${currentCount}`
    });

    // Adding Occurrence to all the other objects in the database
    // Officer Unit
    if((officerUnit !== '') && (officerUnit.includes('OU'))){
        const dbid = officerUnit.split(' | ')[1];
        await OfficerUnit.findOneAndUpdate({officerDBID: dbid}, {
            $push: { occurrences: fileNumber }
        })
    }

    // Telephone
    if((telephone !== '') && (telephone.includes('TP'))){
        const dbid = telephone.split(' | ')[1];
        await Telephone.findOneAndUpdate({telephoneDBID: dbid}, {
            $push: { occurrences: fileNumber }
        })
    }

    // Address
    if((address !== '') && (address.includes('AD'))){
        const dbid = address.split(' | ')[1];
        await Address.findOneAndUpdate({addressDBID: dbid}, {
            $push: { occurrences: fileNumber }
        })
    }

    // Vehicle
    if((vehicle !== '') && (vehicle.includes('VE'))){
        const dbid = property.split(' | ')[1];
        await Vehicle.findOneAndUpdate({vehicleDBID: dbid}, {
            $push: { occurrences: fileNumber }
        })
    }

    // Property
    if((property !== '') && (property.includes('PP'))){
        const dbid = property.split(' | ')[1];
        await Property.findOneAndUpdate({propertyDBID: dbid}, {
            $push: { occurrences: fileNumber }
        })
    }

    // Bus / Org
    if((busOrg !== '') && (busOrg.includes('BO'))){
        const dbid = busOrg.split(' | ')[1];
        await BusOrg.findOneAndUpdate({busOrgDBID: dbid}, {
            $push: { occurrences: fileNumber }
        })
    }

    // Person
    if((person !== '') && (person.includes('PE'))){
        const dbid = person.split(' | ')[1];
        await Person.findOneAndUpdate({personDBID: dbid}, {
            $push: { occurrences: fileNumber }
        })
    }


    if(occurrence){
        res.status(201).json({
            _id: occurrence._id,
            fileNumber: occurrence.fileNumber,
            summary: occurrence.summary,
            person: occurrence.person,
            busOrg: occurrence.busOrg,
            property: occurrence.property,
            vehicle: occurrence.vehicle,
            telephone: occurrence.telephone,
            officerUnit: occurrence.officerUnit,
            address: occurrence.address,
        })
    } else {
        res.status(400);
        throw new Error('Invalid Occurrence data');
    }
});


// @desc    Get all Occurrence
// @route   GET /api/v1/occurrence/
// @access  Private
const getAllOccurrence = asyncHandler(async (req, res) => {

    const occurrence = await Occurrence.find();

    res.status(200).json(occurrence);
});

// @desc    Get one Occurrence
// @route   GET /api/v1/occurrence/:id
// @access  Private
const getOccurrence = asyncHandler(async (req, res) => {

    const occurrence = await Occurrence.findById(req.params.id);

    if(!occurrence){
        res.status(401);
        throw Error('Occurrence not found');
    }

    res.status(200).json(occurrence);
});


// @desc    Search Occurrence
// @route   GET /api/v1/occurrence/search
// @access  Private
const searchOfficerUnit = asyncHandler(async (req, res) => {
    const searchQuery = req.body.query;
    const allData = await Occurrence.find();

    res.status(200).json(result);
});


// @desc    Search Occurrence
// @route   GET /api/v1/occurrence/search
// @access  Private
const searchOccurrence = asyncHandler(async (req, res) => {
    const searchQuery = req.query.query;
    const allOccurrence = await Occurrence.find();
    const result = allOccurrence.filter((item) => {return item.fileNumber.includes(searchQuery)});
    res.status(200).json(result);
});


module.exports = {
    createOccurrence,
    getAllOccurrence,
    getOccurrence,
    searchOccurrence
}
