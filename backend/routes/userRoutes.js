const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getMe, changePasswordUser, resetPassword, getAll} = require('../controller/userController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(registerUser);

router.route('/login').post(loginUser);

router.route('/getMe').get(protect, getMe);
router.route('/getAll').get(getAll);

router.route('/reset').post(resetPassword);
router.route('/changePassword').post(changePasswordUser);

module.exports = router;