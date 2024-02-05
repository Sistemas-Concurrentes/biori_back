import { Module } from '@nestjs/common';
import { LoginUsecase } from './login.usecase';
import { UsertableModule } from '../../../datasource/db/usertable/usertable.module';
import { MyJwtModule } from '../../../utiles/jwt/jwt.module';
import { RegisterUsecase } from './register.usecase';


@Module({
  imports: [ UsertableModule, MyJwtModule],
  controllers: [],
  providers: [LoginUsecase, RegisterUsecase],
  exports: [LoginUsecase, RegisterUsecase],
})
export class AuthUsecaseModule {}
