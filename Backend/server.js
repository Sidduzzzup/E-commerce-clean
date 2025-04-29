import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./Routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Get current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware

app.use(cors({
	origin: ["http://localhost:5173", "https://e-commerce-clean.vercel.app"], // ✅ add deployed site
	credentials: true, // only if you’re using cookies
  }));
  


app.use(express.json());
app.use(cookieParser());

// Health check route
app.get('/health', (req, res) => {
	res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use("/api/auth", authRoutes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
	app.use(express.static(join(__dirname, "../frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(join(__dirname, "../frontend/dist/index.html"));
	});
}

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		error: 'Something went wrong!',
		message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
	});
});

// 404 handler
app.use((req, res) => {
	res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port: ${PORT}`);
});