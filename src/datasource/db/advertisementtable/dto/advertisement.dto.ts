import {IsArray, IsNotEmpty} from 'class-validator';

export class AdvertisementDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  @IsArray()
  groups: number[];
}

