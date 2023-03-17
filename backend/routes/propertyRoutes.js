const express = require('express');
const router = express.Router();
const {createProperty, getAllProperties, getProperty, searchProperty} = require('../controller/propertyController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createProperty);
router.route('/').get(getAllProperties);
router.route('/search').get(searchProperty);
router.route('/:id').get(getProperty);

module.exports = router;