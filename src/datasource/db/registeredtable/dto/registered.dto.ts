import {IsNotEmpty} from 'class-validator';

export class RegisteredDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  date: Date;
}

