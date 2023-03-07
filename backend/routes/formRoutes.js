const express = require('express');
const router = express.Router();
const {createForm, getAllForms, getForm} = require('../controller/formController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').post(protect, createForm);
router.route('/').get(protect, getAllForms);
router.route('/:id').get(protect, getForm);

module.exports = router;