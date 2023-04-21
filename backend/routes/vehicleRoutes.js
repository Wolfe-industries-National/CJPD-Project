const express = require('express');
const router = express.Router();
const {createVehicle, getAllVehicles, getVehicle, searchVehicle, detailSearchVehicle, deleteVehicle} = require('../controller/vehicleController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createVehicle);
router.route('/').get(getAllVehicles);
router.route('/search').get(searchVehicle);
router.route('/detailSearch').post(detailSearchVehicle);
router.route('/:id').get(getVehicle);
router.route('/delete').post(deleteVehicle);

module.exports = router;