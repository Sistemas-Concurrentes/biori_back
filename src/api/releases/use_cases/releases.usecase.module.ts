import { Module } from '@nestjs/common';
import {
  NoticetableModule,
} from '../../../datasource/db/noticetable/noticetable.module';
import { ConsultUsecase } from './consult.usecase';
import { ReportModule } from '../../../datasource/db/reporttable/reporttable.module';
import { EventtableModule } from '../../../datasource/db/eventtable/eventtable.module';
import {AddEventUsecase} from './events/use_cases/add_event.usecase';
import {
  UsertableModule,
} from '../../../datasource/db/usertable/usertable.module';
import {
  AddNoticesUsecase,
} from './notices/use_cases/add_notices.usecase';
import {AddReportUsecase} from './reports/use_cases/add_report.usecase';

@Module({
  imports: [
    NoticetableModule,
    ReportModule,
    EventtableModule,
    UsertableModule],
  controllers: [],
  providers: [
    ConsultUsecase,
    AddEventUsecase,
    AddNoticesUsecase,
    AddReportUsecase],
  exports: [
    ConsultUsecase,
    AddEventUsecase,
    AddNoticesUsecase,
    AddReportUsecase],
})
export class ReleasesUsecaseModule {}
