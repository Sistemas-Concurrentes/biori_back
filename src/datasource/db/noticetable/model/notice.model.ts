import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';
import { Group } from './groupnotice.model';

export class NoticeModel {
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

  groups:Group[];
  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;


  constructor(json: any, groupAdvs:Group[]) {
    this.id = json.id;
    this.title = json.title;
    this.description = json.description;
    this.userId = json.user_id;
    this.userName = json.name + ' ' + json.surname;
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;
    this.groups = groupAdvs;
  };
}