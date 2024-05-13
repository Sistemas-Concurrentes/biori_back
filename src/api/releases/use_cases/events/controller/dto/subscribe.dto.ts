import {IsNotEmpty, IsNumber} from 'class-validator';

export class SubscribeDto {
  @IsNotEmpty()
  @IsNumber()
  idEvent: number;
}