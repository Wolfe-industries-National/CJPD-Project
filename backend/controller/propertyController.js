const asyncHandler = require('express-async-handler');

const Property = require('../models/propertyModel');
const Occurrence = require("../models/occurrenceModel");


// @desc    Create new Property
// @route   POST /api/v1/property/
// @access  Private
const createProperty = asyncHandler(async (req, res) => {
    const {owner, typeOfProperty, vinOfProperty, valueOfProperty, descriptionOfProperty} = req.body;

    // Validation
    if(!typeOfProperty){
        res.status(400);
        throw new Error('Please include Type of property');
    }

    let currentCount = await Property.estimatedDocumentCount();

    do {
        currentCount += 1;
    } while ((await Property.find({propertyDBID: `PP_${currentCount}`})).length >= 1);

    // Create Address
    const property = await Property.create({
        owner: owner.toLowerCase(),
        typeOfProperty: typeOfProperty.toLowerCase(),
        vinOfProperty,
        valueOfProperty,
        descriptionOfProperty: descriptionOfProperty.toLowerCase(),
        propertyDBID: `PP_${currentCount}`
    })

    if(property){
        res.status(201).json({
            _id: property._id,
            owner: property.owner,
            typeOfProperty: property.typeOfProperty,
            vinOfProperty: property.vinOfProperty,
            valueOfProperty: property.valueOfProperty,
            descriptionOfProperty: property.descriptionOfProperty
        })
    } else {
        res.status(400);
        throw new Error('Invalid property data');
    }
});


// @desc    Get all property
// @route   GET /api/v1/property/
// @access  Private
const getAllProperties = asyncHandler(async (req, res) => {

    const properties = await Property.find();

    res.status(200).json(properties);
});

// @desc    Get one property
// @route   GET /api/v1/property/:id
// @access  Private
const getProperty = asyncHandler(async (req, res) => {

    const property = await Property.findById(req.params.id);

    if(!property){
        res.status(401);
        throw Error('property not found');
    }

    res.status(200).json(property);
});


// @desc    Search Property
// @route   GET /api/v1/property/search
// @access  Private
const searchProperty = asyncHandler(async (req, res) => {
    const searchQuery = req.query.query;
    const allOccurrence = await Property.find();
    const result = allOccurrence.filter((item) => {return item.typeOfProperty.includes(searchQuery)});
    res.status(200).json(result);
});

// @desc    Search Property
// @route   GET /api/v1/property/detailSearch
// @access  Private
const detailSearchProperty = asyncHandler(async (req, res) => {
    const searchData = req.body;
    let newSearchData = searchData;

    if(newSearchData.owner === ''){
        delete newSearchData.owner;
    }else{
        newSearchData.owner = newSearchData.owner.toLowerCase();
    }
    if(newSearchData.typeOfProperty === ''){
        delete newSearchData.typeOfProperty;
    }else{
        newSearchData.typeOfProperty = newSearchData.typeOfProperty.toLowerCase();
    }
    if(newSearchData.vinOfProperty === ''){
        delete newSearchData.vinOfProperty;
    }else{
        newSearchData.vinOfProperty = newSearchData.vinOfProperty.toLowerCase();
    }
    if(newSearchData.valueOfProperty === ''){
        delete newSearchData.valueOfProperty;
    }else{
        newSearchData.valueOfProperty = newSearchData.valueOfProperty.toLowerCase();
    }
    if(newSearchData.descriptionOfProperty === ''){
        delete newSearchData.descriptionOfProperty;
    }else{
        newSearchData.descriptionOfProperty = newSearchData.descriptionOfProperty.toLowerCase();
    }

    const result = await Property.find(newSearchData);

    res.status(200).json(result);
});


// @desc    Delete Property
// @route   DELETE /api/v1/property/delete
// @access  Private
const deleteProperty = asyncHandler(async (req, res) => {
    const { propertyId } = req.body;
    await Property.findByIdAndDelete(propertyId);
});

// @desc    Update Property
// @route   PATCH /api/v1/property/update
// @access  Private
const updateProperty = asyncHandler(async (req, res) => {
    console.log('UPDATE PROPERTY CONTROLLER');
    console.log('PROPERTY CONTROLLER DATA:', req.body);
    const {propertyID, owner, typeOfProperty, vinOfProperty, valueOfProperty, descriptionOfProperty} = req.body;

    // Validation
    if(!typeOfProperty){
        res.status(400);
        throw new Error('Please include Type of property');
    }

     // Update Property
     const updatedProperty = await Property.findByIdAndUpdate( propertyID ,{
        owner: owner ? owner.toLowerCase() : '',
        typeOfProperty: typeOfProperty ? typeOfProperty.toLowerCase() : '',
        vinOfProperty: vinOfProperty ? vinOfProperty : '',
        valueOfProperty: valueOfProperty ? valueOfProperty : '',
        descriptionOfProperty: descriptionOfProperty ? descriptionOfProperty.toLowerCase() : '',
     })

    if(updatedProperty){
        console.log('UPDATED PROPERTY CREATED');
        res.status(201).json({
            _id: updatedProperty._id,
            owner: updatedProperty.owner,
            typeOfProperty: updatedProperty.typeOfProperty,
            vinOfProperty: updatedProperty.vinOfProperty,
            valueOfProperty: updatedProperty.valueOfProperty,
            descriptionOfProperty: updatedProperty.descriptionOfProperty,
            propertyDBID: updatedProperty.propertyDBID,
        })
    } else {
        res.status(400);
        throw new Error('Invalid updatedProperty data');
    }
})


module.exports = {
    createProperty,
    getAllProperties,
    getProperty,
    searchProperty,
    detailSearchProperty,
    deleteProperty,
    updateProperty
}
