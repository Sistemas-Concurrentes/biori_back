import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { ReportModel } from './model/report.model';
import {ReportDto} from './dto/report.dto';


@Injectable()
export class ReportTable {
  constructor(private dbConnection: DbConnection) {
  }

  async getAll(): Promise<ReportModel[]> {
    const query = 'SELECT r.*, t.name, t.surname\n' +
      'FROM reports r\n' +
      'INNER JOIN (\n' +
      '    SELECT t.id, u.name, u.surname\n' +
      '    FROM teacher t\n' +
      '    INNER JOIN user u ON u.id = t.user_id\n' +
      ') AS t ON t.id = r.publisher';


    const reports = await this.dbConnection.runQuery(query);

    return reports.map((report) => new ReportModel(report));

  }

  async createReport(report: ReportDto): Promise<void> {
    try {
      const query = 'INSERT INTO reports (title, description, publisher) ' +
          'VALUES (?, ?, ?);';

      const values = [
        report.titulo, report.descripcion, report.teacherId];
      await this.dbConnection.runQuery(query, values);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

}