import { Module } from '@nestjs/common';
import { LoginUsecase } from './login.usecase';
import { UsertableModule } from '../../../datasource/db/usertable/usertable.module';
import { MyJwtModule } from '../../../utiles/jwt/jwt.module';


@Module({
  imports: [ UsertableModule, MyJwtModule],
  controllers: [],
  providers: [LoginUsecase],
  exports: [LoginUsecase],
})
export class AuthUsecaseModule {}
