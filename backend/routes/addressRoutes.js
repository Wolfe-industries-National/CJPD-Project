const express = require('express');
const router = express.Router();
const {createAddress, getAllAddresses, getAddress, searchAddress} = require('../controller/addressController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, createAddress);
router.route('/').get(protect, getAllAddresses);
router.route('/search').get(searchAddress);
router.route('/:id').get(protect, getAddress);

module.exports = router;