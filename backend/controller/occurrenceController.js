const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Occurrence = require('../models/occurrenceModel');
const OfficerUnit = require("../models/officerUnitModel");
const Person = require("../models/personModel");


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

    // making the address info be equal to an address ID
    const newAddress = mongoose.Types.ObjectId(address);
    const newPerson = mongoose.Types.ObjectId(person);
    const newBusOrg = mongoose.Types.ObjectId(busOrg);
    const newProperty = mongoose.Types.ObjectId(property);
    const newVehicle = mongoose.Types.ObjectId(vehicle);
    const newTelephone = mongoose.Types.ObjectId(telephone);
    const newOfficerUnit = mongoose.Types.ObjectId(officerUnit);

    // Create BusOrg
    const occurrence = await Occurrence.create({
        fileNumber,
        summary,
        person: newPerson,
        busOrg: newBusOrg,
        property: newProperty,
        vehicle: newVehicle,
        telephone: newTelephone,
        officerUnit: newOfficerUnit,
        address: newAddress
    })

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
