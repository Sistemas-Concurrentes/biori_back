import { Module } from '@nestjs/common';
import { AdvertisementtableModule } from '../../../datasource/db/advertisementtable/advertisementtable.module';
import { ConsultUsecase } from './consult.usecase';
import { ReportModule } from '../../../datasource/db/reporttable/reporttable.module';
import { EventtableModule } from '../../../datasource/db/eventtable/eventtable.module';
import {AddEventUsecase} from './add_event.usecase';
import {
  UsertableModule,
} from '../../../datasource/db/usertable/usertable.module';

@Module({
  imports: [
    AdvertisementtableModule,
    ReportModule,
    EventtableModule,
    UsertableModule],
  controllers: [],
  providers: [ConsultUsecase, AddEventUsecase],
  exports: [ConsultUsecase, AddEventUsecase],
})
export class ReleasesUsecaseModule {}
