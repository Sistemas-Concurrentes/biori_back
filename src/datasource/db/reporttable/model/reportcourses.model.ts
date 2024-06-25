import { IsNotEmpty } from 'class-validator';
import { ReportCoursesDto } from '../dto/reportcourses.dto';

export class ReportCourseModel {
  @IsNotEmpty()
  reportCourses: Map<number, number[]>;

  constructor(reportCourseDtos: ReportCoursesDto[]) {
    this.reportCourses = new Map<number, number[]>();

    reportCourseDtos.forEach((reportCourseDto) => {
      if (!this.reportCourses.has(reportCourseDto.reportId)) {
        this.reportCourses.set(reportCourseDto.reportId,
          [reportCourseDto.courseId]);
      } else {
        this.reportCourses.get(reportCourseDto.reportId).
          push(reportCourseDto.courseId);
      }
    });

  };
}