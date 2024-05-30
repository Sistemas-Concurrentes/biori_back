import {Module} from '@nestjs/common';
import {MyJwtModule} from '../../../../../utiles/jwt/jwt.module';
import {AuthGuardModule} from '../../../../auth/guards/auth.guard.module';
import {
  NoticesUsecaseModule,
} from '../use_cases/notices.usecase.module';
import { NoticesEntrypoint } from './notices.entrypoint';

@Module({
  imports: [MyJwtModule, AuthGuardModule, NoticesUsecaseModule],
  controllers: [NoticesEntrypoint],
  providers: [],
  exports: [],
})
export class NoticesControllerModule {
}
