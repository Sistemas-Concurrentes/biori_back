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
    const advertisements: Array<AdvertisementModel> = await this.advertisementTable.getAll();
    // recoger los grupos de advertisement

    const reports: Array<ReportModel> = await this.reportTable.getAll();
    // crear ConsultResult
    return null;

  }
}
