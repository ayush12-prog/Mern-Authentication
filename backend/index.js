import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import { createClient } from "redis";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

await connectDb();

const redisUrl = process.env.REDIS_URL;

export let redisClient = null;

if (redisUrl && redisUrl.startsWith("redis://")) {
  try {
    redisClient = createClient({
      url: redisUrl,
    });

    await redisClient.connect();
    console.log("connected to redis");
  } catch (error) {
    console.log("Redis connection failed, continuing without Redis:", error.message);
    redisClient = null;
  }
} else {
  console.log("Redis URL not configured or invalid, continuing without Redis");
}

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

//importing routes
import userRoutes from "./routes/user.js";

//using routes
app.use("/api/v1", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
