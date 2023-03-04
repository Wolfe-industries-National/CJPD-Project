const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const BusOrg = require('../models/busOrgModel');

// @desc    Create new BusOrg
// @route   POST /api/v1/bus-org/
// @access  Private
const createBusOrg = asyncHandler(async (req, res) => {
    const {owner, name, typeOfBusOrg, address, alarmCompany, telephoneNumber} = req.body;

    // Validation
    if(!name){
        res.status(400);
        throw new Error('Please include name of Business or Organization');
    }

    // making the address info be equal to an address ID
    const newAddress = mongoose.Types.ObjectId(address);

    // Create BusOrg
    const busOrg = await BusOrg.create({
        owner,
        name,
        typeOfBusOrg,
        address: newAddress,
        alarmCompany,
        telephoneNumber
    })

    if(busOrg){
        res.status(201).json({
            _id: busOrg._id,
            owner: busOrg.owner,
            name: busOrg.name,
            typeOfBusOrg: busOrg.typeOfBusOrg,
            address: busOrg.address,
            alarmCompany: busOrg.alarmCompany,
            telephoneNumber: busOrg.telephoneNumber,
        })
    } else {
        res.status(400);
        throw new Error('Invalid Business or Organization data');
    }
});


// @desc    Get all BusOrg
// @route   GET /api/v1/bus-org/
// @access  Private
const getAllBusOrg = asyncHandler(async (req, res) => {

    const busOrg = await BusOrg.find();

    res.status(200).json(busOrg);
});

// @desc    Get one BusOrg
// @route   GET /api/v1/bus-org/:id
// @access  Private
const getBusOrg = asyncHandler(async (req, res) => {

    const busOrg = await BusOrg.findById(req.params.id);

    if(!busOrg){
        res.status(401);
        throw Error('Business or Organization not found');
    }

    res.status(200).json(busOrg);
});


module.exports = {
    createBusOrg,
    getAllBusOrg,
    getBusOrg,
}
