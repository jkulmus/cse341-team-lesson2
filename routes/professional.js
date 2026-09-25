const express = require('express');
const router = express.Router();

const controller = require('../controllers/professional');

router.get('/', controller.getData);

module.exports = router;