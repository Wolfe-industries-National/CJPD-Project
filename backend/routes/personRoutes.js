const express = require('express');
const router = express.Router();
const {createPerson, getAllPerson, getPerson, searchPerson, detailSearchPerson} = require('../controller/personController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createPerson);
router.route('/').get(getAllPerson);
router.route('/search').get(searchPerson);
router.route('/detailSearch').post(detailSearchPerson);
router.route('/:id').get(getPerson);

module.exports = router;