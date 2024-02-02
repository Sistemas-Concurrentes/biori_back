import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { DbModule } from './datasource/db/db.module';
import { AuthControllerModule } from './api/auth/controller/auth.controller.module';

@Module({
  imports: [UserModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
