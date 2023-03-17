const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Person = require('../models/personModel');
const Occurrence = require("../models/occurrenceModel");
const OfficerUnit = require("../models/officerUnitModel");

// @desc    Create new Person
// @route   POST /api/v1/person/
// @access  Private
const createPerson = asyncHandler(async (req, res) => {
    const {name, dateOfBirth, telephone, address, fps, height, weight, aliases, associatedVehicles, associates, flags, tattoos, hairColour, eyeColour} = req.body;

    // Validation
    if(!name){
        res.status(400);
        throw new Error('Please include Name');
    }

    // making the info be equal to the info's ID
    const newAddress = null;
    const newTelephone = null;
    const newAssociatedVehicles = null;
    const newAssociates = null;
    if(address){
        newAddress = mongoose.Types.ObjectId(address);
    }
    if(telephone){
        newTelephone = mongoose.Types.ObjectId(telephone);
    }
    if(associatedVehicles){
        newAssociatedVehicles = mongoose.Types.ObjectId(associatedVehicles);
    }
    if (associates) {
        newAssociates = mongoose.Types.ObjectId(associates);
    }


    // Create Person
    const person = await Person.create({
        name,
        dateOfBirth,
        telephone: newTelephone,
        address: newAddress,
        fps,
        height,
        weight,
        aliases,
        associatedVehicles: newAssociatedVehicles,
        associates: newAssociates,
        flags,
        tattoos,
        hairColour,
        eyeColour,
    })

    if(person){
        res.status(201).json({
            _id: person._id,
            name: person.name,
            dateOfBirth: person.dateOfBirth,
            telephone: person.telephone,
            address: person.address,
            fps: person.fps,
            height: person.height,
            weight: person.weight,
            aliases: person.aliases,
            associatedVehicles: person.associatedVehicles,
            associates: person.associates,
            flags: person.flags,
            tattoos: person.tattoos,
            hairColour: person.hairColour,
            eyeColour: person.eyeColour,
        })
    } else {
        res.status(400);
        throw new Error('Invalid Person data');
    }
});

// @desc    Get all Person
// @route   GET /api/v1/person/
// @access  Private
const getAllPerson = asyncHandler(async (req, res) => {

    const people = await Person.find();

    res.status(200).json(people);
});

// @desc    Get one Person
// @route   GET /api/v1/person/:id
// @access  Private
const getPerson = asyncHandler(async (req, res) => {

    const person = await Person.findById(req.params.id);

    if(!person){
        res.status(401);
        throw Error('Person not found');
    }

    res.status(200).json(person);
});


// @desc    Search Person
// @route   GET /api/v1/person/search
// @access  Private
const searchPerson = asyncHandler(async (req, res) => {
    const searchQuery = req.query.query;
    const result = await Person.aggregate([
        {
            '$search': {
                'index': 'searchIndex-Person',
                'autocomplete': {
                    'query': searchQuery == '' ? '' : searchQuery,
                    'path': 'name',
                    'fuzzy': {}
                },
                'highlight': {
                    'path': [
                        'name'
                    ]
                }
            }
        }
    ])
    res.status(200).json(result);
});


module.exports = {
    createPerson,
    getAllPerson,
    getPerson,
    searchPerson
}