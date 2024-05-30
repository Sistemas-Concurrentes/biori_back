import {IsNotEmpty} from 'class-validator';

export class ReportDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  scholarYear: number;

  @IsNotEmpty()
  toTeachers: boolean;

  @IsNotEmpty()
  courses: number[];
}

