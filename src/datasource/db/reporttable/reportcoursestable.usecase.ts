import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { ReportCourseModel } from './model/reportcourses.model';
import { ReportCoursesDto } from './dto/reportcourses.dto';

@Injectable()
export class ReportCoursesTable {
  constructor(private dbConnection: DbConnection) {
  }

  async getAll(): Promise<ReportCourseModel> {
    const query = 'SELECT rc.* from courses_reports rc INNER JOIN ' +
      'courses c ON c.curse = rc.course_id ORDER BY rc.report_id;';

    const reportCourseJsons = await this.dbConnection.runQuery(query);

    const reportCourseDto = reportCourseJsons.map((reportCourseJsons) => {
      return new ReportCoursesDto(reportCourseJsons);
    });

    return new ReportCourseModel(reportCourseDto);
  }

  async asignCoursesToReport(report: number, courses: number[]) {
    const placeholders = courses.map(() => '(?, ?)').join(', ');
    const query = `INSERT INTO courses_reports (report_id, course_id) VALUES ${placeholders}`;

    const values = courses.flatMap(course => [report, course]);
    return await this.dbConnection.runQuery(query, values);
  }

}