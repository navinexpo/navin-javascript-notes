import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import connectDB from './config/db'
import cors from 'cors'

import authRoutes from './routes/'

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json())

connectDB();
