const express = require('express');
const login = require('../controller/login/login');

const router = express.Router();

router.post('/login', login);

module.exports = router;