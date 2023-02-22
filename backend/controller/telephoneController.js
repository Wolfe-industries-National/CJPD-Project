const asyncHandler = require('express-async-handler');

const Telephone = require('../models/telephoneModel');


// @desc    Create new Telephone
// @route   POST /api/v1/telephone/
// @access  Private
const createTelephone = asyncHandler(async (req, res) => {
    const {owner, typeOfTelephone, telephoneNumber} = req.body

    // Validation
    if(!telephoneNumber){
        res.status(400);
        throw new Error('Please include number');
    }

    // Create Telephone
    const telephone = await Telephone.create({
        owner,
        typeOfTelephone,
        telephoneNumber
    })

    if(telephone){
        res.status(201).json({
            _id: telephone._id,
            owner: telephone.owner,
            typeOfTelephone: telephone.typeOfTelephone,
            telephoneNumber: telephone.telephoneNumber
        })
    } else {
        res.status(400);
        throw new Error('Invalid telephone data')
    }
});


// @desc    Get all telephones
// @route   GET /api/v1/telephone/
// @access  Private
const getAllTelephones = asyncHandler(async (req, res) => {

    const telephones = await Telephone.find();

    res.status(200).json(telephones);
});

// @desc    Get one telephone
// @route   GET /api/v1/telephone/:id
// @access  Private
const getTelephone = asyncHandler(async (req, res) => {

    const telephone = await Telephone.findById(req.params.id);

    if(!telephone){
        res.status(401);
        throw Error('Telephone not found');
    }

    res.status(200).json(telephone);
});


module.exports = {
    createTelephone,
    getAllTelephones,
    getTelephone,
}
