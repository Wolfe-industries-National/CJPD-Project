const express = require('express');
const router = express.Router();
const {createPerson, getAllPerson, getPerson} = require('../controller/personController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, createPerson);
router.route('/').get(protect, getAllPerson);
router.route('/:id').get(protect, getPerson);

module.exports = router;