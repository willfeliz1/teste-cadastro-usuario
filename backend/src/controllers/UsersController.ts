import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import UsersRepository from "../repositories/UsersRepository";
import UploadUserPhotoService from "../services/UploadUserPhotoService";

export default class UsersController {

  public async index(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.index();
    
    if(!users) {
      response.status(400).json({ message: 'users not found'});
    }

    return response.json(classToClass(users));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const user_id = request.params.id;

    const user = await usersRepository.show(user_id);

    if(!user) {
      response.status(400).json({ message: 'user not found'});
    }

    return response.json(classToClass(user));
  }



  public async create(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const { name, birthdate, email } = request.body;

    const requestImage = request.file as Express.Multer.File;

    const photo = requestImage.filename;

    const user = await usersRepository.create({
      name,
      birthdate,
      email,
      photo,
    });

    return response.json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    
    const user_id = request.params.id;

    const { name, birthdate, email, photo } = request.body;

    const user = await usersRepository.update({
      user_id,
      name,
      birthdate,
      email,
      photo
    });

    return response.json(classToClass(user));
  }

  public async upload(request: Request, response: Response): Promise<Response> {
    const uploadUserPhotoService = new UploadUserPhotoService();

    const user = await uploadUserPhotoService.execute({
      user_id: request.params.id,
      photoFilename: request.file.filename,
    });

    return response.json(classToClass(user));
  }
}