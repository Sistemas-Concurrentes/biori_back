import { Module } from '@nestjs/common';
import { LoginUsecase } from './login.usecase';
import { UsertableModule } from '../../../datasource/db/usertable/usertable.module';
import { MyJwtModule } from '../../../utiles/jwt/jwt.module';
import { RegisterUsecase } from './register.usecase';
import { ValidationUsecase } from './validation.usecase';
import { MyMailerModule } from '../../../utiles/mailer/mailer.module';
import { ResendUsecase } from './resend.usecase';


@Module({
  imports: [ UsertableModule, MyJwtModule, MyMailerModule],
  controllers: [],
  providers: [LoginUsecase, RegisterUsecase, ValidationUsecase, ResendUsecase],
  exports: [LoginUsecase, RegisterUsecase, ValidationUsecase, ResendUsecase],
})
export class AuthUsecaseModule {}
