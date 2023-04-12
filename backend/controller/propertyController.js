const asyncHandler = require('express-async-handler');

const Property = require('../models/propertyModel');
const Occurrence = require("../models/occurrenceModel");


// @desc    Create new Property
// @route   POST /api/v1/property/
// @access  Private
const createProperty = asyncHandler(async (req, res) => {
    const {owner, typeOfProperty, vinOfProperty, valueOfProperty, descriptionOfProperty} = req.body;

    // Validation
    if(!vinOfProperty){
        res.status(400);
        throw new Error('Please include VIN of property');
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
    }
    if(newSearchData.typeOfProperty === ''){
        delete newSearchData.typeOfProperty;
    }
    if(newSearchData.vinOfProperty === ''){
        delete newSearchData.vinOfProperty;
    }
    if(newSearchData.valueOfProperty === ''){
        delete newSearchData.valueOfProperty;
    }
    if(newSearchData.descriptionOfProperty === ''){
        delete newSearchData.descriptionOfProperty;
    }

    const result = await Property.find(newSearchData);

    res.status(200).json(result);
});


module.exports = {
    createProperty,
    getAllProperties,
    getProperty,
    searchProperty,
    detailSearchProperty
}
