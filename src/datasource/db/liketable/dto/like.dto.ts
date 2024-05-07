import {IsNotEmpty} from 'class-validator';

export class LikeDto {
  @IsNotEmpty()
  studentId: number;

  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  isFollowed: boolean;
}

