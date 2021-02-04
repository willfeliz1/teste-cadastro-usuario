import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './routes/routes';

import './database/connection';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));


export default app;
