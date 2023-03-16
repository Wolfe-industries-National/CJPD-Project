const express = require('express');
const router = express.Router();
const {createBusOrg, getAllBusOrg, getBusOrg, searchBusOrg} = require('../controller/busOrgController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createBusOrg);
router.route('/').get(protect, getAllBusOrg);
router.route('/search').get(searchBusOrg);
router.route('/:id').get(protect, getBusOrg);

module.exports = router;