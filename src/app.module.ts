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
  NoticesControllerModule,
} from './api/releases/use_cases/notices/controller/notices.module';
import {
  ReportControllerModule,
} from './api/releases/use_cases/reports/controller/reports.module';

@Module({
  imports: [
    DbModule, AuthControllerModule,
    ReleasesControllerModule,
    EventsControllerModule,
    NoticesControllerModule,
    ReportControllerModule,
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
                path: 'notice',
                module: NoticesControllerModule,
              },
              {
                path: 'report',
                module: ReportControllerModule,
              },
            ],

          },
        ],
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
