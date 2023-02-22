const asyncHandler = require('express-async-handler');

const Address = require('../models/addressModel');


// @desc    Create new Address
// @route   POST /api/v1/address/
// @access  Private
const createAddress = asyncHandler(async (req, res) => {
    const {owner, typeOfBuilding, vacant, country, city, address} = req.body;

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


module.exports = {
    createAddress,
    getAllAddresses,
    getAddress,
}
