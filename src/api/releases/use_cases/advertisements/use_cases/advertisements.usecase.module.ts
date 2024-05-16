import {Module} from '@nestjs/common';
import {
  UsertableModule,
} from '../../../../../datasource/db/usertable/usertable.module';
import {AddAdvertisementUsecase} from './add_advertisement.usecase';
import {
  AdvertisementtableModule,
} from '../../../../../datasource/db/advertisementtable/advertisementtable.module';

@Module({
  imports: [
    UsertableModule,
    AdvertisementtableModule,
  ],
  controllers: [],
  providers: [AddAdvertisementUsecase],
  exports: [AddAdvertisementUsecase],
})
export class AdvertisementsUsecaseModule {
  constructor() {
  }
}
