import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '../config/upload';

import UsersController from '../controllers/UsersController';

const usersController = new UsersController();

const upload = multer(uploadConfig.multer);

const routes = Router();

routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.put('/users/:id', usersController.update);
routes.patch('/users/:id/photo', upload.single('photo'), usersController.upload);

export default routes;