import {Module} from '@nestjs/common';
import {MyJwtModule} from '../../../../../utiles/jwt/jwt.module';
import {AuthGuardModule} from '../../../../auth/guards/auth.guard.module';
import {
  EventsUsecaseModule,
} from '../use_cases/events.usecase.module';
import {EventsEntrypoint} from './events.entrypoint';

@Module({
  imports: [MyJwtModule, AuthGuardModule, EventsUsecaseModule],
  controllers: [EventsEntrypoint],
  providers: [],
  exports: [],
})
export class EventsControllerModule {
}
