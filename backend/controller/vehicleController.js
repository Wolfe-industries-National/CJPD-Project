const asyncHandler = require('express-async-handler');

const Vehicle = require('../models/vehicleModel');
const OfficerUnit = require("../models/officerUnitModel");


// @desc    Create new Vehicle
// @route   POST /api/v1/vehicle/
// @access  Private
const createVehicle = asyncHandler(async (req, res) => {
    const {owner, makeOfVehicle, modelOfVehicle, yearOfVehicle, colourOfVehicle, vinOfVehicle, plateOfVehicle} = req.body;

    // Validation
    if(!plateOfVehicle){
        res.status(400);
        throw new Error('Please include plate');
    }

    // Create Address
    const vehicle = await Vehicle.create({
        owner,
        makeOfVehicle,
        modelOfVehicle,
        yearOfVehicle,
        colourOfVehicle,
        vinOfVehicle,
        plateOfVehicle
    })

    if(vehicle){
        res.status(201).json({
            _id: vehicle._id,
            owner: vehicle.owner,
            makeOfVehicle: vehicle.makeOfVehicle,
            modelOfVehicle: vehicle.modelOfVehicle,
            yearOfVehicle: vehicle.yearOfVehicle,
            colourOfVehicle: vehicle.colourOfVehicle,
            vinOfVehicle: vehicle.vinOfVehicle,
            plateOfVehicle: vehicle.plateOfVehicle,
        })
    } else {
        res.status(400);
        throw new Error('Invalid vehicle data');
    }
});


// @desc    Get all vehicles
// @route   GET /api/v1/vehicle/
// @access  Private
const getAllVehicles = asyncHandler(async (req, res) => {

    const vehicles = await Vehicle.find();

    res.status(200).json(vehicles);
});

// @desc    Get one vehicle
// @route   GET /api/v1/vehicle/:id
// @access  Private
const getVehicle = asyncHandler(async (req, res) => {

    const vehicle = await Vehicle.findById(req.params.id);

    if(!vehicle){
        res.status(401);
        throw Error('Vehicle not found');
    }

    res.status(200).json(vehicle);
});


// @desc    Search Officer unit
// @route   GET /api/v1/vehicle/search
// @access  Private
const searchVehicle = asyncHandler(async (req, res) => {
    const searchQuery = req.query.query;
    const result = await Vehicle.aggregate([
        {
            '$search': {
                'index': 'searchIndex-Vehicle',
                'autocomplete': {
                    'query': searchQuery == '' ? '' : searchQuery,
                    'path': ['makeOfVehicle', 'modelOfVehicle', 'plateOfVehicle'],
                    'fuzzy': {}
                },
                'highlight': {
                    'path': [
                        'makeOfVehicle', 'modelOfVehicle', 'plateOfVehicle'
                    ]
                }
            }
        }
    ])
    res.status(200).json(result);
});


module.exports = {
    createVehicle,
    getAllVehicles,
    getVehicle,
    searchVehicle
}
