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

    let currentCount = await Vehicle.estimatedDocumentCount();

    do {
        currentCount += 1;
    } while ((await Vehicle.find({vehicleDBID: `VE_${currentCount}`})).length >= 1);

    // Create Address
    const vehicle = await Vehicle.create({
        owner: owner.toLowerCase(),
        makeOfVehicle: makeOfVehicle.toLowerCase(),
        modelOfVehicle: modelOfVehicle.toLowerCase(),
        yearOfVehicle,
        colourOfVehicle: colourOfVehicle.toLowerCase(),
        vinOfVehicle,
        plateOfVehicle: plateOfVehicle.toLowerCase(),
        vehicleDBID: `VE_${currentCount}`,
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
    // const searchQuery = req.query.query;
    // const result = await Vehicle.aggregate([
    //     {
    //         '$search': {
    //             'index': "searchIndex-Vehicle",
    //             'text': {
    //                 'query': searchQuery == '' ? '' : searchQuery,
    //                 'path': {
    //                     'wildcard': "*"
    //                 }
    //             }
    //         } 
    //     }
    // ])
    // res.status(200).json(result);
    const searchQuery = req.query.query;
    const allOccurrence = await Vehicle.find();
    const result = allOccurrence.filter((item) => {return item.makeOfVehicle.includes(searchQuery)});
    res.status(200).json(result);
});

// @desc    Search Vehicle
// @route   GET /api/v1/vehicle/detailSearch
// @access  Private
const detailSearchVehicle = asyncHandler(async (req, res) => {
    const searchData = req.body;
    let newSearchData = searchData;

    if(newSearchData.owner === ''){
        delete newSearchData.owner;
    }else{
        newSearchData.owner = newSearchData.owner.toLowerCase();
    }
    if(newSearchData.makeOfVehicle === ''){
        delete newSearchData.makeOfVehicle;
    }else{
        newSearchData.makeOfVehicle = newSearchData.makeOfVehicle.toLowerCase();
    }
    if(newSearchData.modelOfVehicle === ''){
        delete newSearchData.modelOfVehicle;
    }else{
        newSearchData.modelOfVehicle = newSearchData.modelOfVehicle.toLowerCase();
    }
    if(newSearchData.yearOfVehicle === ''){
        delete newSearchData.yearOfVehicle;
    }else{
        newSearchData.yearOfVehicle = newSearchData.yearOfVehicle.toLowerCase();
    }
    if(newSearchData.colourOfVehicle === ''){
        delete newSearchData.colourOfVehicle;
    }else{
        newSearchData.colourOfVehicle = newSearchData.colourOfVehicle.toLowerCase();
    }
    if(newSearchData.vinOfVehicle === ''){
        delete newSearchData.vinOfVehicle;
    }else{
        newSearchData.vinOfVehicle = newSearchData.vinOfVehicle.toLowerCase();
    }
    if(newSearchData.plateOfVehicle === ''){
        delete newSearchData.plateOfVehicle;
    }else{
        newSearchData.plateOfVehicle = newSearchData.plateOfVehicle.toLowerCase();
    }

    const result = await Vehicle.find(newSearchData);

    res.status(200).json(result);
});

// @desc    Delete vehicle
// @route   GET /api/v1/vehicle/delete
// @access  Private
const deleteVehicle = asyncHandler(async (req, res) => {
    const { vehicleId } = req.body;
    await Vehicle.findByIdAndDelete(vehicleId);
});

// @desc    Update vehicle
// @route   PATCH /api/v1/vehicle/delete
// @access  Private
const updateVehicle = asyncHandler(async (req, res) => {
    const {vehicleID, owner, makeOfVehicle, modelOfVehicle, yearOfVehicle, colourOfVehicle, vinOfVehicle, plateOfVehicle} = req.body;

    // Validation
    if(!plateOfVehicle){
        res.status(400);
        throw new Error('Please include plate');
    }

     // Update Vehicle
     const updatedVehicle = await Vehicle.findByIdAndUpdate( vehicleID ,{
        owner: owner.toLowerCase(),
        makeOfVehicle: makeOfVehicle.toLowerCase(),
        modelOfVehicle: modelOfVehicle.toLowerCase(),
        yearOfVehicle,
        colourOfVehicle: colourOfVehicle.toLowerCase(),
        vinOfVehicle,
        plateOfVehicle: plateOfVehicle.toLowerCase(),
     })

    if(updatedVehicle){
        res.status(201).json({
            _id: updatedVehicle._id,
            owner: updatedVehicle.owner,
            makeOfVehicle: updatedVehicle.makeOfVehicle,
            modelOfVehicle: updatedVehicle.modelOfVehicle,
            yearOfVehicle: updatedVehicle.yearOfVehicle,
            colourOfVehicle: updatedVehicle.colourOfVehicle,
            vinOfVehicle: updatedVehicle.vinOfVehicle,
            plateOfVehicle: updatedVehicle.plateOfVehicle,
        })
    } else {
        res.status(400);
        throw new Error('Invalid updatedVehicle data');
    }
})


module.exports = {
    createVehicle,
    getAllVehicles,
    getVehicle,
    searchVehicle,
    detailSearchVehicle,
    deleteVehicle,
    updateVehicle
}
