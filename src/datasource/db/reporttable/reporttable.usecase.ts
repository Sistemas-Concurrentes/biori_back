import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { ReportModel } from './model/report.model';
import {ReportDto} from './dto/report.dto';
import { ReportCoursesTable } from './reportcoursestable.usecase';


@Injectable()
export class ReportTable {
  constructor(
    private dbConnection: DbConnection,
    private reportCourse: ReportCoursesTable) {
  }

  async getAll(): Promise<ReportModel[]> {
    const query = ' SELECT r.*, u.name, u.surname ' +
      'FROM reports r ' +
      'INNER JOIN user u on r.publisher = u.id;';

    const reports = await this.dbConnection.runQuery(query);

    const reportCourseModel = await this.reportCourse.getAll();

    return reports.map((report) => {
      if (reportCourseModel.reportCourses.has(report.id)) {
        return new ReportModel(report,
          reportCourseModel.reportCourses.get(report.id));
      }
    });
  }

  async createReport(report: ReportDto): Promise<void> {
    try {
      const query = 'INSERT INTO reports (title, description, publisher, scholar_year, to_teachers) ' +
        'VALUES (?, ?, ?, ?, ?);';

      const values = [
        report.titulo,
        report.descripcion,
        report.userId,
        report.scholarYear,
        report.toTeachers];
      const result = await this.dbConnection.runQuery(query, values);

      const reportId = result.insertId;

      await this.reportCourse.asignCoursesToReport(reportId, report.courses);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

}