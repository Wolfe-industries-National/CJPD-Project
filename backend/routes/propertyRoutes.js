const express = require('express');
const router = express.Router();
const {createProperty, getAllProperties, getProperty} = require('../controller/propertyController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, createProperty);
router.route('/').get(protect, getAllProperties);
router.route('/:id').get(protect, getProperty);

module.exports = router;