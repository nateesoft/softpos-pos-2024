const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');
const { validateLogin, validateRegister } = require('../middleware/validation');

// Login
router.post('/login', validateLogin, AuthController.login);

// Register
router.post('/register', validateRegister, AuthController.register);

// Get Profile (ต้อง login)
router.get('/profile', authenticateToken, AuthController.getProfile);

module.exports = router;