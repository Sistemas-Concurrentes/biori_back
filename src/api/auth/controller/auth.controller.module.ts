
import { Module } from '@nestjs/common';
import { AuthLoginEntrypoint } from './auth.login.entrypoint';
import { AuthUsecaseModule } from '../use_cases/auth.usecase.module';
import { AuthRegisterEntrypoint } from './auth.register.entrypoint';
import { AuthGuardModule } from '../guards/auth.guard.module';
import { MyJwtModule } from '../../../utiles/jwt/jwt.module';


@Module({
  imports: [ AuthUsecaseModule, AuthGuardModule, MyJwtModule],
  controllers: [ AuthLoginEntrypoint, AuthRegisterEntrypoint],
  providers: [ ],
  exports: [ ],
})
export class AuthControllerModule {}
