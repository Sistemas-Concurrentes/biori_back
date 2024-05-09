import {IsNotEmpty} from 'class-validator';

export class Student_registeredDto {
  @IsNotEmpty()
  studentId: number;

  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  isFollowed: boolean;
}

