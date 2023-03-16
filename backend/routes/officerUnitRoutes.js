const express = require('express');
const router = express.Router();
const {createOfficerUnit, getAllOfficerUnits, getOfficerUnit, searchOfficerUnit} = require('../controller/officerUnitController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post( createOfficerUnit);
router.route('/').get(protect, getAllOfficerUnits);
router.route('/search').get(searchOfficerUnit);
router.route('/:id').get(protect, getOfficerUnit);

module.exports = router;