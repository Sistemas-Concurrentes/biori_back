import {IsArray, IsNotEmpty} from 'class-validator';
import {Tag} from '../../../../controller/dto/tag.dto';

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
  tagsButtons: Tag[];

  fechaFinInscripcion: Date | null;

}

