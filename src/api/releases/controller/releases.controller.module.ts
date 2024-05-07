
import { Module } from '@nestjs/common';
import { MyJwtModule } from '../../../utiles/jwt/jwt.module';
import { AuthGuardModule } from '../../auth/guards/auth.guard.module';
import { ReleasesUsecaseModule } from '../use_cases/releases.usecase.module';
import { ReleasesEntrypoint } from './releases.entrypoint';
import {
  UserInteractionEntrypoint,
} from '../use_cases/user_interaction/controller/user_interaction.entrypoint';
import {
  UserInteractionUsecaseModule,
} from '../use_cases/user_interaction/use_cases/user_interaction.usecase.module';


@Module({
  imports: [
    MyJwtModule,
    AuthGuardModule,
    ReleasesUsecaseModule,
    UserInteractionUsecaseModule],
  controllers: [ReleasesEntrypoint, UserInteractionEntrypoint],
  providers: [],
  exports: [ ],
})
export class ReleasesControllerModule {}
