import { Expose } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'date'})
  birthdate: Date;

  @Column()
  email: string;

  @Column()
  photo: string;

  @Expose({ name: 'photo_url' })
  get getPhotoUrl(): string | null {
    return this.photo
      ? `http://192.168.100.242:3333/files/${this.photo}`
      : null;
  }
}
