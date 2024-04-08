import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { EventTable } from './eventtable.usecase';
import { EventDatesTable } from './event_datestable/event_datestable.usecase';


@Module({
  imports: [ DbModule ],
  controllers: [],
  providers: [EventTable, EventDatesTable],
  exports: [EventTable],
})
export class EventtableModule {}
