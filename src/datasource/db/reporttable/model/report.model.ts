import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

export class ReportModel {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  to_teachers: boolean;

  @IsNotEmpty()
  scholarYear: number;

  @IsNotEmpty()
  courses: number[];

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;

  constructor(json: any, courses: number[]) {
    this.id = json.id;
    this.title = json.title;
    this.description = json.description;
    this.userId = json.publisher;
    this.userName = json.name + ' ' + json.surname;
    this.to_teachers = json.to_teachers;
    this.scholarYear = json.scholar_year;
    this.courses = courses;
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;
  };
}