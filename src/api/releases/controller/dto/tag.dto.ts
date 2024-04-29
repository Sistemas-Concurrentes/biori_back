import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class Tag {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  id: number;

}