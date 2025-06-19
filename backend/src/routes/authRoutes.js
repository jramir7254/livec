const express = require('express');

const { login, register } = require('@controllers/authController');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
// router.get('/role/:userID', role);

module.exports = router;