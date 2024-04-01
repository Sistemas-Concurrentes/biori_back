import { Injectable } from '@nestjs/common';
import { ConsultResult } from './dto/consult.result';
import { Advertisementtable } from '../../../datasource/db/advertisementtable/advertisementtable.usecase';
import { AdvertisementModel } from '../../../datasource/db/advertisementtable/model/advertisement.model';
import { ReportModel } from '../../../datasource/db/reporttable/model/report.model';
import { ReportTable } from '../../../datasource/db/reporttable/reporttable.usecase';


@Injectable()
export class ConsultUsecase {

  constructor(private advertisementTable: Advertisementtable,
              private reportTable: ReportTable) {}

  async run(): Promise<ConsultResult> {
    const allAdvertisements: Array<AdvertisementModel> = await this.advertisementTable.getAll();
    const allReports: Array<ReportModel> = await this.reportTable.getAll();

    return {
      advertisements: allAdvertisements.map((advertisement) => {
        return {
          id: advertisement.id,
          title: advertisement.title,
          description: advertisement.description,
          groups: advertisement.groups,
          userName: advertisement.userName,
          userId: advertisement.userId,
          updatedAt: advertisement.updatedAt
        }
      }),
      reports: allReports.map((report) => {
        return {
          id: report.id,
          title: report.title,
          description: report.description,
          teacherName: report.teacherName,
          teacherId: report.teacherId,
          updatedAt: report.updatedAt
        }
      })
    };

  }
}
