
import { Module } from '@nestjs/common';
import { MyJwtModule } from '../../../utiles/jwt/jwt.module';


@Module({
  imports: [ MyJwtModule],
  controllers: [ ],
  providers: [ ],
  exports: [ ],
})
export class ReleasesControllerModule {}
