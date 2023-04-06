const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Person = require('../models/personModel');

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


    // Create Person
    const person = await Person.create({
        name: name.toLowerCase(),
        dateOfBirth,
        telephone,
        address: address.toLowerCase(),
        fps,
        height,
        weight,
        aliases: aliases.toLowerCase(),
        associatedVehicles,
        associates: associates.toLowerCase(),
        flags,
        tattoos: tattoos.toLowerCase(),
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

// @desc    Search Person
// @route   GET /api/v1/person/detailSearch
// @access  Private
const detailSearchPerson = asyncHandler(async (req, res) => {
    const searchData = req.body;
    let newSearchData = searchData;

    if(newSearchData.name === ''){
        delete newSearchData.name;
    }
    if(newSearchData.dateOfBirth === ''){
        delete newSearchData.dateOfBirth;
    }
    if(newSearchData.telephone === ''){
        delete newSearchData.telephone;
    }
    if(newSearchData.address === ''){
        delete newSearchData.address;
    }
    if(newSearchData.fps === ''){
        delete newSearchData.fps;
    }
    if(newSearchData.height === ''){
        delete newSearchData.height;
    }
    if(newSearchData.weight === ''){
        delete newSearchData.weight;
    }
    if(newSearchData.aliases[0] === ''){
        delete newSearchData.aliases;
    }
    if(newSearchData.associatedVehicles[0] === ''){
        delete newSearchData.associatedVehicles;
    }
    if(newSearchData.associates[0] === ''){
        delete newSearchData.associates;
    }
    if(newSearchData.flags[0] === ''){
        delete newSearchData.flags;
    }
    if(newSearchData.tattoos[0] === ''){
        delete newSearchData.tattoos;
    }
    if(newSearchData.hairColour === ''){
        delete newSearchData.hairColour;
    }
    if(newSearchData.eyeColour === ''){
        delete newSearchData.eyeColour;
    }
    
    console.log(newSearchData);
    const result = await Person.find(newSearchData);
    console.log(result);
    res.status(200).json(result);
});


module.exports = {
    createPerson,
    getAllPerson,
    getPerson,
    searchPerson,
    detailSearchPerson
}