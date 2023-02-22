const express = require('express');
const router = express.Router();
const {createBusOrg, getAllBusOrg, getBusOrg} = require('../controller/busOrgController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, createBusOrg);
router.route('/').get(protect, getAllBusOrg);
router.route('/:id').get(protect, getBusOrg);

module.exports = router;