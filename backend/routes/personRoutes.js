const express = require('express');
const router = express.Router();
const {createPerson, getAllPerson, getPerson, searchPerson, detailSearchPerson, deletePerson} = require('../controller/personController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createPerson);
router.route('/').get(getAllPerson);
router.route('/search').get(searchPerson);
router.route('/detailSearch').post(detailSearchPerson);
router.route('/:id').get(getPerson);
router.route('/delete').post(deletePerson);

module.exports = router;