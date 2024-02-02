
import { Module } from '@nestjs/common';
import { AuthLoginEntrypoint } from './auth.login.entrypoint';
import { AuthUsecaseModule } from '../use_cases/auth.usecase.module';


@Module({
  imports: [ AuthUsecaseModule,],
  controllers: [ AuthLoginEntrypoint ],
  providers: [ ],
  exports: [ ],
})
export class AuthControllerModule {}
