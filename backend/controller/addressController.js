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
        owner: owner.toLowerCase(),
        typeOfBuilding: typeOfBuilding.toLowerCase(),
        vacant,
        country: country.toLowerCase(),
        province: province.toLowerCase(),
        city: province.toLowerCase(),
        address: address.toLowerCase()
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
    let result = await Address.aggregate([
        {
            '$search': {
                'index': "searchIndex-Address",
                'text': {
                    'query': searchQuery == '' ? '' : searchQuery,
                    'path': {
                        'wildcard': "*"
                    }
                }
            } 
        }
    ])
    if(result.length === 0){
        const doubleChecking = await Address.find();
        doubleChecking.map((item) => {
            if(item.address.includes(searchQuery)){
                result.push(item);
            }
        })
    }
    res.status(200).json(result);
    console.log(result);
});

// @desc    Search Address
// @route   GET /api/v1/address/detailSearch
// @access  Private
const detailSearchAddress = asyncHandler(async (req, res) => {
    console.log('BODY:', req.body);
    const searchData = req.body;
    let newSearchData = searchData;

    if(newSearchData.owner === ''){
        delete newSearchData.owner;
    }
    if(newSearchData.typeOfBuilding === ''){
        delete newSearchData.typeOfBuilding;
    }
    if(newSearchData.vacant === ''){
        delete newSearchData.vacant;
    }
    if(newSearchData.country === ''){
        delete newSearchData.country;
    }
    if(newSearchData.province === ''){
        delete newSearchData.province;
    }
    if(newSearchData.address === ''){
        delete newSearchData.address;
    }
    if(newSearchData.city === ''){
        delete newSearchData.city;
    }

    console.log('CONTROLLER:',newSearchData);
    const result = await Address.find(newSearchData);

    res.status(200).json(result);
});


module.exports = {
    createAddress,
    getAllAddresses,
    getAddress,
    searchAddress,
    detailSearchAddress
}
