const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

// @desc    Create new user
// @route   POST /api/v1/users/
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, userType} = req.body

    // Validation
    if(!name, !email, !password){
        res.status(400);
        throw new Error('Please include all fields');
    }

    // Find if user already exists
    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        userType
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            userType: user.userType,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

});

// @desc Change Password User
// @route POST /api/v1/users/changePassword
// @access Public
const changePasswordUser = asyncHandler(async (req, res) => {

    const {userId, newPassword} = req.body;

    console.log(userId, newPassword);

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const updatedUser = await User.findByIdAndUpdate(userId, {password: hashedPassword});

    if(updatedUser){
        res.status(201).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            userType: updatedUser.userType,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});



// @desc Reseting Password
// @route POST /api/v1/users/resetPassword
// @access PUBLIC
const resetPassword = asyncHandler(async (req, res) => {
     const { userID } = req.body;

     // Hash password
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash('Password1', salt);

     const updatedUser = await User.findByIdAndUpdate(userID, {password: hashedPassword});

     if(updatedUser){
        res.status(201).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            userType: updatedUser.userType,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
})



// @desc    Login User
// @route   POST /api/v1/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({email});

    // Check user and password match
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            userType: user.userType,
            token: generateToken(user._id),
        })
    } else {
        res.status(401);
        throw new Error('Invalid Credentials');
    }
})

// @desc    Get current User
// @route   GET /api/v1/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    const user = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        userType: req.user.userType,
    }
    res.status(200).json(user);
});

// @desc    Get All Users
// @route   GET /api/v1/users/all
// @access  Private
const getAll = asyncHandler(async (req, res) => {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
});

// Generate Token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    changePasswordUser,
    resetPassword,
    getAll
}