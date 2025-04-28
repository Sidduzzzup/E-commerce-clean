import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

// Middleware to verify token and protect routes
export const verifyToken = async (req, res, next) => {
	try {
		const token = req.cookies.jwt; // Get JWT from cookies

		if (!token) {
			return res.status(401).json({ success: false, message: "Unauthorized, no token" });
		}

		// Verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decoded.userId; // Attach user ID to request

		const user = await User.findById(req.userId).select("-password");
		if (!user) {
			return res.status(401).json({ success: false, message: "User not found" });
		}

		req.user = user; // Attach user object to request
		next(); // Proceed to the next middleware
	} catch (error) {
		return res.status(401).json({ success: false, message: "Invalid or expired token" });
	}
};

// Middleware for handling errors globally
export const errorHandler = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	res.status(statusCode).json({ success: false, message });

	console.error(err); // Log the error for debugging
};
