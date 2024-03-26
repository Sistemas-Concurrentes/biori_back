import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

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

  @IsBoolean()
  deletedAt: Date;


  constructor(json: any) {
    this.id = json.id;
    this.title = json.title;
    this.description = json.description;
    this.userId = json.user_id;
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.deletedAt = json.is_deleted;
  };
}