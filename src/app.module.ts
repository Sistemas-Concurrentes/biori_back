import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './datasource/db/db.module';
import { AuthControllerModule } from './api/auth/controller/auth.controller.module';
import { ReleasesControllerModule } from './api/releases/controller/releases.controller.module';
import {RouterModule} from '@nestjs/core';
import {
  UserInteractionModule,
} from './api/releases/use_cases/user_interaction/controller/user_interaction.module';

@Module({
  imports: [
    DbModule, AuthControllerModule,
    ReleasesControllerModule,
    UserInteractionModule,

    RouterModule.register(
        [
          {
            path: 'auth',
            module: AuthControllerModule,
          },
          {
            path: 'releases',
            module: ReleasesControllerModule,
            children: [
              {
                path: 'event',
                module: UserInteractionModule,
              },
            ],

          },
        ],
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
