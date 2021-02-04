import { Request, Response } from "express";
import UsersRepository from "../repositories/UsersRepository";


export default class UsersController {

  public async index(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.index();
    
    if(!users) {
      response.status(400).json({ message: 'users not found'});
    }

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const { name, birthdate, photo } = request.body;

    const user = await usersRepository.create({
      name,
      birthdate,
      photo
    });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    
    const user_id = request.params.id;

    const { name, birthdate, photo } = request.body;

    const user = await usersRepository.update({
      user_id,
      name,
      birthdate,
      photo
    });

    return response.json(user);
  }
}