const express = require('express');
const router = express.Router();
const {createOccurrence, getAllOccurrence, getOccurrence, searchOccurrence, deleteOccurrence} = require('../controller/occurrenceController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createOccurrence);
router.route('/').get(getAllOccurrence);
router.route('/search').get(searchOccurrence);
router.route('/:id').get(getOccurrence);
router.route('/delete').post(deleteOccurrence);

module.exports = router;