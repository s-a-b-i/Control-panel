import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import addressRoutes from './routes/addressRoutes.js'
import triggeringRulesRoutes from './routes/triggeringRulesRoutes.js'
import applicationRoutes from './routes/applicationRoutes.js'
import keyloggerRoutes  from './routes/keyloggerRoutes.js'
import assetRoutes from './routes/assetRoutes.js'
import transactionRoutes from './routes/transactionRoutes.js'
import controlRecordRoutes from './routes/controlRecordRoutes.js'


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

app.use('/api/v1' , addressRoutes)


app.use('/api/v1' , triggeringRulesRoutes)

app.use('/api/v1' , applicationRoutes)

app.use('/api/v1' , keyloggerRoutes)

app.use('/api/v1' , assetRoutes)

app.use('/api/v1' , transactionRoutes)


app.use('/api/v1' , controlRecordRoutes)


export { app };