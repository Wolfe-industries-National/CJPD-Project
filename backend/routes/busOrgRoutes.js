const express = require('express');
const router = express.Router();
const {createBusOrg, getAllBusOrg, getBusOrg, searchBusOrg, detailSearchBusOrg, deleteBusOrg, updateBusOrg} = require('../controller/busOrgController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createBusOrg);
router.route('/').get(getAllBusOrg);
router.route('/search').get(searchBusOrg);
router.route('/detailSearch').post(detailSearchBusOrg);
router.route('/:id').get(getBusOrg);
router.route('/delete').post(deleteBusOrg);
router.route('/update').patch(updateBusOrg);

module.exports = router;