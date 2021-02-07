import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '../config/upload';

import UsersController from '../controllers/UsersController';

const usersController = new UsersController();

const upload = multer(uploadConfig.multer);

const uploadToCreate = multer(uploadConfig.multerCreate);

const routes = Router();

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.show);
routes.post('/users', uploadToCreate.single('photo'), usersController.create);
routes.put('/users/:id', usersController.update);
routes.patch('/users/:id/photo', upload.single('photo'), usersController.upload);

export default routes;