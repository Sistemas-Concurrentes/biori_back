import {IsNotEmpty} from 'class-validator';

export class AddReportDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  scholarYear: number;

  @IsNotEmpty()
  toTeachers: boolean;

  @IsNotEmpty()
  courses: number[];
}

