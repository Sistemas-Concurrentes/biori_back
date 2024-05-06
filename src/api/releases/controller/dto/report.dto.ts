import {IsNotEmpty} from 'class-validator';

export class AddReportDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descripcion: string;
}

