import { Module } from '@nestjs/common';
import { AdvertisementtableModule } from '../../../datasource/db/advertisementtable/advertisementtable.module';
import { ConsultUsecase } from './consult.usecase';
import { ReportModule } from '../../../datasource/db/reporttable/reporttable.module';

@Module({
  imports: [ AdvertisementtableModule, ReportModule ],
  controllers: [],
  providers: [ ConsultUsecase],
  exports: [ ConsultUsecase ],
})
export class ReleasesUsecaseModule {}
