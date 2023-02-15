const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getMe} = require('../controller/userController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(registerUser);

router.route('/login').post(loginUser);

router.route('/getMe').get(protect, getMe);

module.exports = router;