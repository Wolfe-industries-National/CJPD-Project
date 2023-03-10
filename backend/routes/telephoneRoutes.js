const express = require('express');
const router = express.Router();
const {createTelephone, getAllTelephones, getTelephone, searchTelephone} = require('../controller/telephoneController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, createTelephone);
router.route('/').get(protect, getAllTelephones);
router.route('/search').get(searchTelephone);
router.route('/:id').get(protect, getTelephone);

module.exports = router;