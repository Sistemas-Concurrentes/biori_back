import {IsNotEmpty} from 'class-validator';

export class User_registeredDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  isFollowed: boolean;
}

