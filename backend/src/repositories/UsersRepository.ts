import { getRepository, Repository } from "typeorm";
import { User } from "../models/User";

// class UsersRepository extends Repository<User> {
  
//   public async index(): Promise<User[]> {
//     let users: User[];

//     users = await this.find();

//     console.log(users);

//     return users;
//   }
// }

interface IRequest {
  user_id?: string;
  name: string;
  birthdate: Date;
  email: string;
  photo: string;
}

class UsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
  
  public async index(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async show(user_id: string): Promise<User> {
    const user = await this.ormRepository.findOne({ id: user_id });

    if(!user) {
      throw new Error('User not found');
    }

    return user;
  }

  public async create({ name, birthdate, email, photo }: IRequest): Promise<User> {
    const user = await this.ormRepository.create({
      name,
      birthdate,
      email,
      photo,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async update({ user_id, name, birthdate, photo }: IRequest): Promise<User> {
    const user = await this.ormRepository.findOne({ id: user_id });

    if(!user) {
      throw new Error('User not found');
    }

    user.name = name;
    user.birthdate = birthdate;
    user.photo = photo;

    return this.ormRepository.save(user);
  }

  public async findbyid(user_id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(user_id);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;