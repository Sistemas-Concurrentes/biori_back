import {IsNotEmpty} from 'class-validator';
import {Tag} from '../../../../controller/dto/tag.dto';

export class AddNoticesDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  groups: Tag[];
}

