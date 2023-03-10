const express = require('express');
const router = express.Router();
const {createVehicle, getAllVehicles, getVehicle, searchVehicle} = require('../controller/vehicleController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, createVehicle);
router.route('/').get(protect, getAllVehicles);
router.route('/search').get(searchVehicle);
router.route('/:id').get(protect, getVehicle);

module.exports = router;