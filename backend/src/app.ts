import 'reflect-metadata';
import 'es6-shim';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import uploadConfig from './config/upload';

import routes from './routes/routes';

import './database/connection';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);


export default app;
