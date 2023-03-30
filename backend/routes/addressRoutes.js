const express = require('express');
const router = express.Router();
const {createAddress, getAllAddresses, getAddress, searchAddress, detailSearchAddress} = require('../controller/addressController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createAddress);
router.route('/').get(getAllAddresses);
router.route('/search').get(searchAddress);
router.route('/detailSearch').post(detailSearchAddress);
router.route('/:id').get(getAddress);

module.exports = router;