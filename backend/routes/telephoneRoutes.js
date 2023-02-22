const express = require('express');
const router = express.Router();
const {createTelephone, getAllTelephones, getTelephone} = require('../controller/telephoneController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, createTelephone);
router.route('/').get(protect, getAllTelephones);
router.route('/:id').get(protect, getTelephone);

module.exports = router;