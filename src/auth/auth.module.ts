import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../users/user.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserService } from '../users/user.service';
import { DbConnection } from '../db/db.connection';



@Module({
  imports: [UserModule,
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: jwtConstants.expiresIn },
      }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, DbConnection],
  exports: [AuthService],
})
export class AuthModule {}
