const express = require('express');
const router = express.Router();
const {createProperty, getAllProperties, getProperty, searchProperty, detailSearchProperty, deleteProperty, updateProperty} = require('../controller/propertyController')

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(createProperty);
router.route('/').get(getAllProperties);
router.route('/search').get(searchProperty);
router.route('/detailSearch').post(detailSearchProperty);
router.route('/:id').get(getProperty);
router.route('/delete').post(deleteProperty);
router.route('/update').patch(updateProperty);

module.exports = router;