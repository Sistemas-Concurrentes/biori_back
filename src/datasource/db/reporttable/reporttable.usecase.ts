import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { ReportModel } from './model/report.model';


@Injectable()
export class ReportTable {
  constructor(private dbConnection: DbConnection) {
  }

  async getAll(): Promise<Array<ReportModel>> {
    const query = 'SELECT * FROM reports';
    const reports = await this.dbConnection.runQuery(query);

    return reports.map((report) => new ReportModel(report));

  }

}