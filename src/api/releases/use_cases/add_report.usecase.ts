import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {
  TeacherTable,
} from '../../../datasource/db/usertable/teacherTable.usecase';
import {AddReportDto} from '../controller/dto/report.dto';
import {ReportDto} from '../../../datasource/db/reporttable/dto/report.dto';
import {
  ReportTable,
} from '../../../datasource/db/reporttable/reporttable.usecase';
import {AddReportResult} from './dto/add_report.result';

@Injectable()
export class AddReportUsecase {

  constructor(
      private reportTable: ReportTable,
      private teacherTable: TeacherTable) {
  }

  async run(addReport: AddReportDto, userId: number): Promise<AddReportResult> {
    const teacherId: number = await this.teacherTable.getUserIdByTeacherId(
        userId);
    const isTeacherAndCoordinator = teacherId == 0;

    if (isTeacherAndCoordinator) {
      throw new HttpException('Teacher not found', HttpStatus.FORBIDDEN);
    }

    const reportDto: ReportDto = {
      titulo: addReport.titulo,
      descripcion: addReport.descripcion,
      teacherId: teacherId,
    };
    await this.reportTable.createReport(reportDto);

    return {
      titulo: addReport.titulo,
    };
  }
}


