import {IsArray, IsNotEmpty} from 'class-validator';

export class NoticeDto {
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

