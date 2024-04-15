import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { ReportModel } from './model/report.model';


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

}