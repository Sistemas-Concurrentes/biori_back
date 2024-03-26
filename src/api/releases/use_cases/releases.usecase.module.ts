import { Module } from '@nestjs/common';
import { AdvertisementtableModule } from '../../../datasource/db/advertisementtable/advertisementtable.module';
import { ConsultUsecase } from './consult.usecase';

@Module({
  imports: [ AdvertisementtableModule ],
  controllers: [],
  providers: [ ConsultUsecase],
  exports: [ ConsultUsecase ],
})
export class ReleasesUsecaseModule {}
