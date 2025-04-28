import express from "express";
import {
	signup,
	login,
	logout,
	forgotPassword,
	resetPassword,
	verifyEmail,
	checkAuth,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Public routes
router.post("/signup", signup); // Register a new user
router.post("/login", login); // User login
router.post("/forgot-password", forgotPassword); // Send password reset link
router.post("/reset-password/:token", resetPassword); // Reset password
router.post("/verify-email", verifyEmail); // Email verification

// Protected routes (require authentication)
router.get("/check-auth", verifyToken, checkAuth); // Check if user is authenticated
router.post("/logout", verifyToken, logout); // Logout user

export default router;
