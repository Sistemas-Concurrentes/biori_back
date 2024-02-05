
import { Module } from '@nestjs/common';
import { AuthLoginEntrypoint } from './auth.login.entrypoint';
import { AuthUsecaseModule } from '../use_cases/auth.usecase.module';
import { AuthRegisterEntrypoint } from './auth.register.entrypoint';


@Module({
  imports: [ AuthUsecaseModule,],
  controllers: [ AuthLoginEntrypoint, AuthRegisterEntrypoint ],
  providers: [ ],
  exports: [ ],
})
export class AuthControllerModule {}
