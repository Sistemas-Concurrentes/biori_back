import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './datasource/db/db.module';
import { AuthControllerModule } from './api/auth/controller/auth.controller.module';
import { ReleasesControllerModule } from './api/releases/controller/releases.controller.module';
import {RouterModule} from '@nestjs/core';
import {
  EventsControllerModule,
} from './api/releases/use_cases/events/controller/events.module';
import {
  AdvertisementsControllerModule,
} from './api/releases/use_cases/advertisements/controller/advertisements.module';

@Module({
  imports: [
    DbModule, AuthControllerModule,
    ReleasesControllerModule,
    EventsControllerModule,
    AdvertisementsControllerModule,
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
                module: EventsControllerModule,
              },
              {
                path: 'advertisement',
                module: AdvertisementsControllerModule,
              },
            ],

          },
        ],
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
