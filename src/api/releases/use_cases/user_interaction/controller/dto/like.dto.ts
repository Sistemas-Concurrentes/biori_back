import {IsBoolean, IsNotEmpty, IsNumber} from 'class-validator';

export class LikeDto {
  @IsNotEmpty()
  @IsNumber()
  idEvent: number;

  @IsNotEmpty()
  @IsBoolean()
  userSetLike: boolean;

}