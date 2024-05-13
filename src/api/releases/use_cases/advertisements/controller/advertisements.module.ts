import {Module} from '@nestjs/common';
import {MyJwtModule} from '../../../../../utiles/jwt/jwt.module';
import {AuthGuardModule} from '../../../../auth/guards/auth.guard.module';
import {
  AdvertisementsUsecaseModule,
} from '../use_cases/advertisements.usecase.module';
import {AdvertisementsEntrypoint} from './advertisements.entrypoint';

@Module({
  imports: [MyJwtModule, AuthGuardModule, AdvertisementsUsecaseModule],
  controllers: [AdvertisementsEntrypoint],
  providers: [],
  exports: [],
})
export class AdvertisementsControllerModule {
}
