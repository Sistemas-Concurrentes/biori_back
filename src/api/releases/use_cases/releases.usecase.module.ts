import { Module } from '@nestjs/common';
import { AdvertisementtableModule } from '../../../datasource/db/advertisementtable/advertisementtable.module';
import { ConsultUsecase } from './consult.usecase';
import { ReportModule } from '../../../datasource/db/reporttable/reporttable.module';
import { EventtableModule } from '../../../datasource/db/eventtable/eventtable.module';
import {AddEventUsecase} from './events/use_cases/add_event.usecase';
import {
  UsertableModule,
} from '../../../datasource/db/usertable/usertable.module';
import {AddAdvertisementUsecase} from './add_advertisement.usecase';
import {AddReportUsecase} from './add_report.usecase';

@Module({
  imports: [
    AdvertisementtableModule,
    ReportModule,
    EventtableModule,
    UsertableModule],
  controllers: [],
  providers: [
    ConsultUsecase,
    AddEventUsecase,
    AddAdvertisementUsecase,
    AddReportUsecase],
  exports: [
    ConsultUsecase,
    AddEventUsecase,
    AddAdvertisementUsecase,
    AddReportUsecase],
})
export class ReleasesUsecaseModule {}
