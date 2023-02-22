const express = require('express');
const router = express.Router();
const {createVehicle, getAllVehicles, getVehicle} = require('../controller/vehicleController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, createVehicle);
router.route('/').get(protect, getAllVehicles);
router.route('/:id').get(protect, getVehicle);

module.exports = router;