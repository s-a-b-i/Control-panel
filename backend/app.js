import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'


const app = express();

dotenv.config();

// Enable CORS with credentials
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Body parsing middleware with size limits for security
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use('/api/v1' , authRoutes)

app.use('/api/v1' , userRoutes)



export { app };