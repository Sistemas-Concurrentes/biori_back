import { IsArray, IsNotEmpty } from 'class-validator';

export class AddGroupEventDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  categoria: string;

  @IsNotEmpty()
  localizacion: string;

  @IsNotEmpty()
  @IsArray()
  fechas: Date[];

  @IsNotEmpty()
  groupId: number[];

  fechaFinInscripcion: Date | null;

}

