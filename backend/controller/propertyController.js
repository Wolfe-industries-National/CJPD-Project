const asyncHandler = require('express-async-handler');

const Property = require('../models/propertyModel');


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

    // Create Address
    const property = await Property.create({
        owner,
        typeOfProperty,
        vinOfProperty,
        valueOfProperty,
        descriptionOfProperty
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


module.exports = {
    createProperty,
    getAllProperties,
    getProperty,
}
