const express = require('express');
const router = express.Router();
const {createAddress, getAllAddresses, getAddress, searchAddress} = require('../controller/addressController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createAddress);
router.route('/').get(getAllAddresses);
router.route('/search').get(searchAddress);
router.route('/:id').get(getAddress);

module.exports = router;