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

    let currentCount = await Address.estimatedDocumentCount();

    do {
        currentCount += 1;
    } while ((await Address.find({addressDBID: `AD_${currentCount}`})).length >= 1);
    

    // Create Address
    const addressUnit = await Address.create({
        owner: owner.toLowerCase(),
        typeOfBuilding: typeOfBuilding.toLowerCase(),
        vacant,
        country: country.toLowerCase(),
        province: province.toLowerCase(),
        city: city.toLowerCase(),
        address: address.toLowerCase(),
        addressDBID: `AD_${currentCount}`,
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
    }else{
        newSearchData.owner = newSearchData.owner.toLowerCase();
    }
    if(newSearchData.typeOfBuilding === ''){
        delete newSearchData.typeOfBuilding;
    }else{
        newSearchData.typeOfBuilding = newSearchData.typeOfBuilding.toLowerCase();
    }
    if(newSearchData.vacant === ''){
        delete newSearchData.vacant;
    }else{
        newSearchData.vacant = newSearchData.vacant.toLowerCase();
    }
    if(newSearchData.country === ''){
        delete newSearchData.country;
    }else{
        newSearchData.country = newSearchData.country.toLowerCase();
    }
    if(newSearchData.province === ''){
        delete newSearchData.province;
    }else{
        newSearchData.province = newSearchData.province.toLowerCase();
    }
    if(newSearchData.address === ''){
        delete newSearchData.address;
    }else{
        newSearchData.address = newSearchData.address.toLowerCase();
    }
    if(newSearchData.city === ''){
        delete newSearchData.city;
    }else{
        newSearchData.city = newSearchData.city.toLowerCase();
    }

    console.log('CONTROLLER:',newSearchData);
    const result = await Address.find(newSearchData);

    res.status(200).json(result);
});


// @desc    Delete address
// @route   GET /api/v1/address/delete
// @access  Private
const deleteAddress = asyncHandler(async (req, res) => {
    const { addressId } = req.body;
    console.log('ADDRESS ID:', addressId);
    await Address.findByIdAndDelete(addressId);
});

// @desc    Update Address
// @route   PATCH /api/v1/address/update
// @access  Private
const updateAddress = asyncHandler(async (req, res) => {
    const {addressID, owner, typeOfBuilding, vacant, country, province, city, address} = req.body;

    // Validation
    if(!address){
        res.status(400);
        throw new Error('Please include address');
    }

     // Update Address
     const updatedAddress = await Address.findByIdAndUpdate( addressID ,{
        owner: owner.toLowerCase(),
        typeOfBuilding: typeOfBuilding.toLowerCase(),
        vacant,
        country: country.toLowerCase(),
        province: province.toLowerCase(),
        city: city.toLowerCase(),
        address: address.toLowerCase(),
     })

    if(updatedAddress){
        res.status(201).json({
            _id: updatedAddress._id,
            owner: updatedAddress.owner,
            typeOfBuilding: updatedAddress.typeOfBuilding,
            vacant: updatedAddress.vacant,
            country: updatedAddress.country,
            province: updatedAddress.province,
            city: updatedAddress.city,
            address: updatedAddress.address,
        })
    } else {
        res.status(400);
        throw new Error('Invalid updatedAddress data');
    }
})


module.exports = {
    createAddress,
    getAllAddresses,
    getAddress,
    searchAddress,
    detailSearchAddress,
    deleteAddress,
    updateAddress
}
