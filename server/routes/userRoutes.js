const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// POST /api/users/register - Register a new user
router.post('/register', userController.registerUser);

// POST /api/users/login - Login user
router.post('/login', userController.loginUser);

// GET /api/users/profile - Get user profile (protected)
router.get('/profile', auth, userController.getUserProfile);

module.exports = router;