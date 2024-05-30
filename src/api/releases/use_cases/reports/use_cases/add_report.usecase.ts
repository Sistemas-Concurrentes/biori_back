import { Injectable } from '@nestjs/common';
import {AddReportDto} from '../controller/dto/report.dto';
import {
  ReportDto,
} from '../../../../../datasource/db/reporttable/dto/report.dto';
import {
  ReportTable,
} from '../../../../../datasource/db/reporttable/reporttable.usecase';
import {AddReportResult} from './dto/add_report.result';

@Injectable()
export class AddReportUsecase {

  constructor(
    private reportTable: ReportTable) {
  }

  async run(addReport: AddReportDto, userId: number): Promise<AddReportResult> {
    const reportDto: ReportDto = {
      titulo: addReport.titulo,
      descripcion: addReport.descripcion,
      userId: userId,
      scholarYear: addReport.scholarYear,
      toTeachers: addReport.toTeachers,
      courses: addReport.courses,
    };
    await this.reportTable.createReport(reportDto);

    return {
      titulo: addReport.titulo,
    };
  }
}


