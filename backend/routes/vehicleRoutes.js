const express = require('express');
const router = express.Router();
const {createVehicle, getAllVehicles, getVehicle, searchVehicle, detailSearchVehicle} = require('../controller/vehicleController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createVehicle);
router.route('/').get(getAllVehicles);
router.route('/search').get(searchVehicle);
router.route('/detailSearch').post(detailSearchVehicle);
router.route('/:id').get(getVehicle);

module.exports = router;