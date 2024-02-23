
import { Module } from '@nestjs/common';
import { MyJwtModule } from '../../../utiles/jwt/jwt.module';
import { AuthGuard } from './auth.guard';


@Module({
  imports: [ MyJwtModule],
  controllers: [ ],
  providers: [ AuthGuard ],
  exports: [ AuthGuard ],
})
export class AuthGuardModule {}
