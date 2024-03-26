import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

export class ReportModel {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  publisherId: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: number;

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
    this.publisherId = json.publisher;
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;
  };
}