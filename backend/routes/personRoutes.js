const express = require('express');
const router = express.Router();
const {createPerson, getAllPerson, getPerson, searchPerson} = require('../controller/personController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createPerson);
router.route('/').get(protect, getAllPerson);
router.route('/search').get(searchPerson);
router.route('/:id').get(protect, getPerson);

module.exports = router;