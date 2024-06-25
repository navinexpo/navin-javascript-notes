import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/router.js";
import cors from 'cors';

config({ path: "./config/config.env" });

export const app = express();

app.use(cors());

app.use("/api", paymentRoute)
