import express from 'express';
import { register, login, getCurrentUser, updateAddress } from '../Controllers/auth.controller.js';
import { authMiddleware } from '../Middleware/auth.middleware.js';

const router = express.Router();

// Auth routes
router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getCurrentUser);
router.put('/update-address', authMiddleware, updateAddress);

export default router; 