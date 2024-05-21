import { Module } from '@nestjs/common';
import { DbModule } from '../../db.module';
import { EventGroupTable } from './event_grouptable.usecase';

@Module({
  imports: [DbModule],
  controllers: [],
  providers: [EventGroupTable],
  exports: [EventGroupTable],
})
export class EventDatesTableModule {
}
