import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';
import { classToPlain, instanceToInstance, instanceToPlain } from 'class-transformer';

export class UsertableModel {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsEmail()
  user_name: string;

  @IsDate()
  birth_date: Date;

  @IsNotEmpty()
  password: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsDate()
  deletedAt: Date;


  constructor(partial: Partial<UsertableModel>) {
    Object.assign(this, partial);
  };

}