import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';

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

  @IsNotEmpty()
  phone_number: string;

  @IsNotEmpty()
  user_type: string;

  rol: string;

  @IsNotEmpty()
  register_code: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsDate()
  deletedAt: Date;

  constructor(json: any) {
    this.id = json.id;
    this.name = json.name;
    this.surname = json.surname;
    this.user_name = json.user_name;
    this.birth_date = json.birth_date;
    this.password = json.password;
    this.phone_number = json.phone_number;
    this.user_type = json.teacherId != null ? 'teacher' : 'student';
    this.rol = json.rol;
    this.register_code = json.register_code;
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.deletedAt = json.deleted;
  };
}