const asyncHandler = require('express-async-handler');

const OfficerUnit = require('../models/officerUnitModel');


// @desc    Create new OfficerUnit
// @route   POST /api/v1/officerUnit/
// @access  Private
const createOfficerUnit = asyncHandler(async (req, res) => {
    const {name, regimentalNumber, rank, unit} = req.body

    // Validation
    if(!name){
        res.status(400);
        throw new Error('Please include name');
    }

    let currentCount = await OfficerUnit.estimatedDocumentCount();

    do {
        currentCount += 1;
    } while ((await OfficerUnit.find({officerDBID: `OU_${currentCount}`})).length >= 1);

    // Create Offcicer Unit
    const officerUnit = await OfficerUnit.create({
        name: name.toLowerCase(),
        regimentalNumber: regimentalNumber.toLowerCase(),
        rank: rank.toLowerCase(),
        unit,
        officerDBID: `OU_${currentCount}`,
    })

    if(officerUnit){
        res.status(201).json({
            _id: officerUnit._id,
            name: officerUnit.name,
            regimentalNumber: officerUnit.regimentalNumber,
            rank: officerUnit.rank,
            unit: officerUnit.unit,
        })
    } else {
        res.status(400);
        throw new Error('Invalid Officer unit data')
    }
});


// @desc    Get all Officer units
// @route   GET /api/v1/officerUnit/
// @access  Private
const getAllOfficerUnits = asyncHandler(async (req, res) => {

    const officerUnits = await OfficerUnit.find();

    res.status(200).json(officerUnits);
});

// @desc    Get one Officer unit
// @route   GET /api/v1/officerUnit/:id
// @access  Private
const getOfficerUnit = asyncHandler(async (req, res) => {

    const officerUnit = await OfficerUnit.findById(req.params.id);

    if(!officerUnit){
        res.status(401);
        throw Error('OfficerUnit not found');
    }

    res.status(200).json(officerUnit);
});

// @desc    Search Officer unit
// @route   GET /api/v1/officerUnit/search
// @access  Private
const searchOfficerUnit = asyncHandler(async (req, res) => {
    const searchQuery = req.query.query;
    const result = await OfficerUnit.aggregate([
        {
            '$search': {
                'index': 'searchIndex-OfficerUnits',
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
    createOfficerUnit,
    getAllOfficerUnits,
    getOfficerUnit,
    searchOfficerUnit
}

