const express = require('express');
const router = express.Router();
const {createOccurrence, getAllOccurrence, getOccurrence} = require('../controller/occurrenceController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, createOccurrence);
router.route('/').get(protect, getAllOccurrence);
router.route('/:id').get(protect, getOccurrence);

module.exports = router;