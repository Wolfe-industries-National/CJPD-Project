const asyncHandler = require('express-async-handler');

const Address = require('../models/addressModel');
const OfficerUnit = require("../models/officerUnitModel");


// @desc    Create new Address
// @route   POST /api/v1/address/
// @access  Private
const createAddress = asyncHandler(async (req, res) => {
    const {owner, typeOfBuilding, vacant, country, province, city, address} = req.body;

    // Validation
    if(!address){
        res.status(400);
        throw new Error('Please include address');
    }

    // Create Address
    const addressUnit = await Address.create({
        owner,
        typeOfBuilding,
        vacant,
        country,
        province,
        city,
        address
    })

    if(addressUnit){
        res.status(201).json({
            _id: addressUnit._id,
            owner: addressUnit.owner,
            typeOfBuilding: addressUnit.typeOfBuilding,
            vacant: addressUnit.vacant,
            country: addressUnit.country,
            province: addressUnit.province,
            city: addressUnit.city,
            address: addressUnit.address,
        })
    } else {
        res.status(400);
        throw new Error('Invalid address data');
    }
});


// @desc    Get all addresses
// @route   GET /api/v1/address/
// @access  Private
const getAllAddresses = asyncHandler(async (req, res) => {

    const addresses = await Address.find();

    res.status(200).json(addresses);
});

// @desc    Get one telephone
// @route   GET /api/v1/address/:id
// @access  Private
const getAddress = asyncHandler(async (req, res) => {

    const addresses = await Address.findById(req.params.id);

    if(!addresses){
        res.status(401);
        throw Error('Address not found');
    }

    res.status(200).json(addresses);
});


// @desc    Search Officer unit
// @route   GET /api/v1/address/search
// @access  Private
const searchAddress = asyncHandler(async (req, res) => {
    const searchQuery = req.query.query;
    const result = await Address.aggregate([
        {
            '$search': {
                'index': 'searchIndex-Address',
                'autocomplete': {
                    'query': searchQuery == '' ? '' : searchQuery,
                    'path': 'address',
                    'fuzzy': {}
                },
                'highlight': {
                    'path': [
                        'address'
                    ]
                }
            }
        }
    ])
    res.status(200).json(result);
    console.log(result);
});


module.exports = {
    createAddress,
    getAllAddresses,
    getAddress,
    searchAddress
}
