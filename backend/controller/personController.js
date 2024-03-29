const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Person = require('../models/personModel');

// @desc    Create new Person
// @route   POST /api/v1/person/
// @access  Private
const createPerson = asyncHandler(async (req, res) => {
    const {name, dateOfBirth, telephone, address, fps, height, weight, race, gender, aliases, associatedVehicles, associates, flags, tattoos, hairColour, eyeColour} = req.body;
    console.log(req.body);
    // Validation
    if(!name){
        res.status(400);
        throw new Error('Please include Name');
    }

    let currentCount = await Person.estimatedDocumentCount();

    do {
        currentCount += 1;
    } while ((await Person.find({personDBID: `PE_${currentCount}`})).length >= 1);

    // Create Person
    const person = await Person.create({
        name: name.toLowerCase(),
        dateOfBirth,
        telephone,
        address: address.toLowerCase(),
        fps: fps.toLowerCase(),
        height,
        weight,
        race,
        gender,
        aliases: aliases.length > 0 ? aliases.toLowerCase() : aliases,
        associatedVehicles: associatedVehicles.length > 0 ? associatedVehicles.toLowerCase() : associatedVehicles,
        associates: associates.length > 0 ? associates.toLowerCase() : associates,
        flags,
        tattoos: tattoos.toLowerCase(),
        hairColour,
        eyeColour,
        personDBID: `PE_${currentCount}`
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
            race: person.race,
            gender: person.gender,
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
    if(newSearchData.race === ''){
        delete newSearchData.race;
    }
    if(newSearchData.gender === ''){
        delete newSearchData.gender;
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

// @desc    Delete Person
// @route   DELETE /api/v1/person/delete
// @access  Private
const deletePerson = asyncHandler(async (req, res) => {
    const { personId } = req.body;
    await Person.findByIdAndDelete(personId);
});

// @desc    Update Person
// @route   PATCH /api/v1/person/update
// @access  Private
const updatePerson = asyncHandler(async (req, res) => {
    console.log('UPDATE PERSON CALLED');
    const {personID, name, dateOfBirth, telephone, address, fps, height, weight, race, gender, aliases, associatedVehicles, associates, flags, tattoos, hairColour, eyeColour} = req.body;
    console.log('PERSON:', req.body);
    // Validation
    if(!name){
        res.status(400);
        throw new Error('Please include name');
    }

     // Update Person
     const updatedPerson = await Person.findByIdAndUpdate( personID ,{
        name: name ? name.toLowerCase() : '',
        dateOfBirth: dateOfBirth ? dateOfBirth : '',
        telephone: telephone ? telephone : '',
        address: address ? address : '',
        fps: fps ? fps.toLowerCase() : '',
        height: height ? height : '',
        weight: weight ? weight : '',
        race: race ? race : '',
        gender: gender ? gender : '',
        aliases: (aliases) ? aliases.toLowerCase() : '',
        associatedVehicles: (associatedVehicles) ? associatedVehicles.toLowerCase() : '',
        associates: (associates) ? associates.toLowerCase() : '',
        flags: flags ? flags : '',
        tattoos: tattoos ? tattoos.toLowerCase() : '',
        hairColour: hairColour ? hairColour : '',
        eyeColour: eyeColour ? eyeColour : '',
     })

    if(updatedPerson){
        console.log("UPDATED PERSON CREATED");
        res.status(201).json({
            _id: updatedPerson._id,
            name: updatedPerson.name,
            dateOfBirth: updatedPerson.dateOfBirth,
            telephone: updatedPerson.telephone,
            address: updatedPerson.address,
            fps: updatedPerson.fps,
            height: updatedPerson.height,
            weight: updatedPerson.weight,
            race: updatedPerson.race,
            gender: updatedPerson.gender,
            aliases: updatedPerson.aliases,
            associatedVehicles: updatedPerson.associatedVehicles,
            associates: updatedPerson.associates,
            flags: updatedPerson.flags,
            tattoos: updatedPerson.tattoos,
            hairColour: updatedPerson.hairColour,
            eyeColour: updatedPerson.eyeColour,
            personDBID: updatedPerson.personDBID,
        })
    } else {
        res.status(400);
        throw new Error('Invalid updatedPerson data');
    }
})


module.exports = {
    createPerson,
    getAllPerson,
    getPerson,
    searchPerson,
    detailSearchPerson,
    deletePerson,
    updatePerson
}