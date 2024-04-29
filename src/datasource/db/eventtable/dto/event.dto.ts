import {IsArray, IsNotEmpty} from 'class-validator';
import {TagModel} from '../../tagtable/model/tag.model';

export class EventDto {
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
  teacherId: number;

  @IsNotEmpty()
  tagsButtons: TagModel[];

  fechaFinInscripcion: Date;

}

