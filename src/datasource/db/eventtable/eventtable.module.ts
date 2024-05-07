import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { EventTable } from './eventtable.usecase';
import { EventDatesTable } from './event_datestable/event_datestable.usecase';
import { EventTagTable } from './event_tagtable/event_tagtable.usecase';
import {RegisteredTableModule} from '../registeredtable/registeredtable.module';


@Module({
  imports: [DbModule, RegisteredTableModule],
  controllers: [],
  providers: [EventTable, EventDatesTable, EventTagTable],
  exports: [EventTable],
})
export class EventtableModule {}
