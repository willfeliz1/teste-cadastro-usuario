import { User } from "../models/User";
import DiskStorageProvider from "../modules/DiskStorageProvider";
import UsersRepository from "../repositories/UsersRepository";

interface IRequest {
  user_id: string;
  photoFilename: string;
}

class UploadUserPhotoService {
  constructor(
    private storageProvider = new DiskStorageProvider(),
    private usersRepository = new UsersRepository()
  ) {}

  public async execute({ user_id, photoFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findbyid(user_id);

    if(!user) {
      throw Error('User not found');
    }

    if(user.photo) {
      await this.storageProvider.deleteFile(user.photo);
    }

    const filename = await this.storageProvider.saveFile(photoFilename);

    user.photo = filename;

    await this.usersRepository.save(user);

    return user;
  }
}

export default UploadUserPhotoService;