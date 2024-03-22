import { IsDate, IsNotEmpty } from 'class-validator';

export class AdvertisementModel {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  userId: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsDate()
  deletedAt: Date;


  constructor(partial: Partial<AdvertisementModel>) {
    Object.assign(this, partial);
  };

}