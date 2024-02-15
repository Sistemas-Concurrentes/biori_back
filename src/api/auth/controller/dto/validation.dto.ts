import { IsNotEmpty, IsNumberString } from 'class-validator';

export class ValidationDto  {

  @IsNotEmpty()
  @IsNumberString()
  register_code: number;

  @IsNotEmpty()
  token: string;


}

