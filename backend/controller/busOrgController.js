const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const BusOrg = require('../models/busOrgModel');
const OfficerUnit = require("../models/officerUnitModel");

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

    let currentCount = await BusOrg.estimatedDocumentCount();

    do {
        currentCount += 1;
    } while ((await BusOrg.find({busOrgDBID: `BO_${currentCount}`})).length >= 1);

    // Create BusOrg
    const busOrg = await BusOrg.create({
        owner: owner.toLowerCase(),
        name: name.toLowerCase(),
        typeOfBusOrg: typeOfBusOrg.toLowerCase(),
        address: address.toLowerCase(),
        alarmCompany: alarmCompany.toLowerCase(),
        telephoneNumber,
        busOrgDBID: `BO_${currentCount}`
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


// @desc    Search Bus Org unit
// @route   GET /api/v1/bus-org/search
// @access  Private
const searchBusOrg = asyncHandler(async (req, res) => {
    const searchQuery = req.query.query;
    const result = await BusOrg.aggregate([
        {
            '$search': {
                'index': 'searchIndex-BusOrg',
                'autocomplete': {
                    'query': searchQuery == '' ? '' : searchQuery,
                    'path': 'name',
                    "fuzzy": {
                        "maxEdits": 1,
                        "prefixLength": 2,
                        "maxExpansions": 100,
                    }
                }
            }
        }
    ])
    res.status(200).json(result);
});

// @desc    Search Bussiness and Organization
// @route   GET /api/v1/bus-org/detailSearch
// @access  Private
const detailSearchBusOrg = asyncHandler(async (req, res) => {
    const searchData = req.body;
    let newSearchData = searchData;

    if(newSearchData.owner === ''){
        delete newSearchData.owner;
    }else{
        newSearchData.owner = newSearchData.owner.toLowerCase();
    }
    if(newSearchData.name === ''){
        delete newSearchData.name;
    }else{
        newSearchData.name = newSearchData.name.toLowerCase();
    }
    if(newSearchData.typeOfBusOrg === ''){
        delete newSearchData.typeOfBusOrg;
    }else{
        newSearchData.typeOfBusOrg = newSearchData.typeOfBusOrg.toLowerCase();
    }
    if(newSearchData.address === ''){
        delete newSearchData.address;
    }else{
        newSearchData.address = newSearchData.address.toLowerCase();
    }
    if(newSearchData.alarmCompany === ''){
        delete newSearchData.alarmCompany;
    }else{
        newSearchData.alarmCompany = newSearchData.alarmCompany.toLowerCase();
    }
    if(newSearchData.telephoneNumber === ''){
        delete newSearchData.telephoneNumber;
    }else{
        newSearchData.telephoneNumber = newSearchData.telephoneNumber.toLowerCase();
    }

    const result = await BusOrg.find(newSearchData);

    res.status(200).json(result);
});

// @desc    Delete busOrg
// @route   DELETE /api/v1/busOrg/delete
// @access  Private
const deleteBusOrg = asyncHandler(async (req, res) => {
    const { busOrgId } = req.body;
    await BusOrg.findByIdAndDelete(busOrgId);
});


module.exports = {
    createBusOrg,
    getAllBusOrg,
    getBusOrg,
    searchBusOrg,
    detailSearchBusOrg,
    deleteBusOrg
}
