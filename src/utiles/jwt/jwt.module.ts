import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

import { DbModule } from '../../datasource/db/db.module';
import { MyJwtService } from './jwt.service';



@Module({
  imports: [JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
    DbModule,
  ],
  controllers: [],
  providers: [MyJwtService],
  exports: [MyJwtService],
})
export class MyJwtModule {}
