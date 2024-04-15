import { Module } from '@nestjs/common';
import { AdvertisementtableModule } from '../../../datasource/db/advertisementtable/advertisementtable.module';
import { ConsultUsecase } from './consult.usecase';
import { ReportModule } from '../../../datasource/db/reporttable/reporttable.module';
import { EventtableModule } from '../../../datasource/db/eventtable/eventtable.module';

@Module({
  imports: [ AdvertisementtableModule, ReportModule, EventtableModule ],
  controllers: [],
  providers: [ ConsultUsecase],
  exports: [ ConsultUsecase ],
})
export class ReleasesUsecaseModule {}
