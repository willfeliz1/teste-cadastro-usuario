import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersController from '../controllers/UsersController';

const usersController = new UsersController();

const routes = Router();

routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.put('/users/:id', usersController.update);

export default routes;