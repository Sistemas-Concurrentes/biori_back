import {IsNotEmpty} from 'class-validator';

export class StudentDto {
  @IsNotEmpty()
  studentId: number;

}

