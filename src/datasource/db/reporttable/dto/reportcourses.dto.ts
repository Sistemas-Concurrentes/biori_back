import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

export class ReportCoursesDto {
  @IsNotEmpty()
  courseId: number;

  @IsNotEmpty()
  reportId: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isDeleted: boolean;

  constructor(json: any) {
    this.courseId = json.course_id;
    this.reportId = json.report_id;
    this.createdAt = json.created;
    this.updatedAt = json.last_update;
    this.isDeleted = json.is_deleted;
  };
}