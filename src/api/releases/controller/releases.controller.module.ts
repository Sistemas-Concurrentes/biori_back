
import { Module } from '@nestjs/common';
import { MyJwtModule } from '../../../utiles/jwt/jwt.module';
import { AuthGuardModule } from '../../auth/guards/auth.guard.module';


@Module({
  imports: [ MyJwtModule, AuthGuardModule],
  controllers: [ ],
  providers: [ ],
  exports: [ ],
})
export class ReleasesControllerModule {}
