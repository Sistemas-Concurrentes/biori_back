import { Module } from '@nestjs/common';
import { LoginUsecase } from './login.usecase';
import { UsertableModule } from '../../../datasource/db/usertable/usertable.module';
import { MyJwtModule } from '../../../utiles/jwt/jwt.module';
import { RegisterUsecase } from './register.usecase';
import { ValidationUsecase } from './validation.usecase';
import { MyMailerModule } from '../../../utiles/mailer/mailer.module';


@Module({
  imports: [ UsertableModule, MyJwtModule, MyMailerModule],
  controllers: [],
  providers: [LoginUsecase, RegisterUsecase, ValidationUsecase],
  exports: [LoginUsecase, RegisterUsecase, ValidationUsecase],
})
export class AuthUsecaseModule {}
