
import { Module } from '@nestjs/common';
import { MyJwtModule } from '../../../utiles/jwt/jwt.module';
import { AuthGuardModule } from '../../auth/guards/auth.guard.module';
import { ReleasesUsecaseModule } from '../use_cases/releases.usecase.module';
import { ReleasesEntrypoint } from './releases.entrypoint';


@Module({
  imports: [
    MyJwtModule,
    AuthGuardModule,
    ReleasesUsecaseModule,
  ],
  controllers: [ReleasesEntrypoint],
  providers: [],
  exports: [ ],
})
export class ReleasesControllerModule {}
