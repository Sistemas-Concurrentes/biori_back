import { IsDate, IsDateString, IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterDto  {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsEmail()
  user_name: string;

  @IsDateString()
  birth_date: Date;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phone_number: string;

}

