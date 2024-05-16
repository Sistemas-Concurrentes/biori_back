import {Module} from '@nestjs/common';
import {MyJwtModule} from '../../../../../utiles/jwt/jwt.module';
import {AuthGuardModule} from '../../../../auth/guards/auth.guard.module';
import {
  ReportsUsecaseModule,
} from '../use_cases/reports.usecase.module';
import {ReportsEntrypoint} from './reports.entrypoint';

@Module({
  imports: [MyJwtModule, AuthGuardModule, ReportsUsecaseModule],
  controllers: [ReportsEntrypoint],
  providers: [],
  exports: [],
})
export class ReportControllerModule {
}
