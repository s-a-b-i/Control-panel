import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import triggeringRulesRoutes from "./routes/triggeringRulesRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import keyloggerRoutes from "./routes/keyloggerRoutes.js";
import assetRoutes from "./routes/assetRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import controlRecordRoutes from "./routes/controlRecordRoutes.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

// Middleware setup
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" })); // Body parsing with size limits
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // URL-encoded parsing
app.use(cookieParser());

// API routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", addressRoutes);
app.use("/api/v1", triggeringRulesRoutes);
app.use("/api/v1", applicationRoutes);
app.use("/api/v1", keyloggerRoutes);
app.use("/api/v1", assetRoutes);
app.use("/api/v1", transactionRoutes);
app.use("/api/v1", controlRecordRoutes);

// Serve static files from the `frontend/dist` directory
app.use(express.static(path.join(__dirname, "frontend", "dist")));

// Catch-all route to serve `index.html` for frontend routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

export { app };
