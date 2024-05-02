import {IsNotEmpty} from 'class-validator';

export class ReportDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  teacherId: number;
}

