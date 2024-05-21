import {IsArray, IsNotEmpty} from 'class-validator';

export class AddEventDto {
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
  associatedIds: number[];

  fechaFinInscripcion: Date | null;

}

