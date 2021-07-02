import cors from 'cors'
import express from 'express';
import routes from './routes/index.js'
import dotenv from 'dotenv'; dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);


export default app;