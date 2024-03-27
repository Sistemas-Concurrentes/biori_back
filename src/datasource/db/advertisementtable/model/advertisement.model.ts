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

  @IsNotEmpty()
  userName: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;


  constructor(json: any) {
    this.id = json.id;
    this.title = json.title;
    this.description = json.description;
    this.userId = json.user_id;
    this.userName = json.name + ' ' + json.surname;
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;
  };
}