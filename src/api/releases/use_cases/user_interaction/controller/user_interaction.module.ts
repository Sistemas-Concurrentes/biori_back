import {Module} from '@nestjs/common';
import {MyJwtModule} from '../../../../../utiles/jwt/jwt.module';
import {AuthGuardModule} from '../../../../auth/guards/auth.guard.module';
import {
  UserInteractionUsecaseModule,
} from '../use_cases/user_interaction.usecase.module';

@Module({
  imports: [MyJwtModule, AuthGuardModule, UserInteractionUsecaseModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class UserInteractionModule {
}
