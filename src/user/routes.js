const express = require('express');
const router = express.Router();

// Calling User Module
const user = require('./controller');

router.get('/listing', user);

module.exports = router;