const express = require('express');
const router = express.Router();
const {createTelephone, getAllTelephones, getTelephone, searchTelephone} = require('../controller/telephoneController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createTelephone);
router.route('/').get(getAllTelephones);
router.route('/search').get(searchTelephone);
router.route('/:id').get(getTelephone);

module.exports = router;