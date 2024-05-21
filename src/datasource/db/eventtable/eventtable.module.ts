import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { EventTable } from './eventtable.usecase';
import { EventDatesTable } from './event_datestable/event_datestable.usecase';
import {RegisteredTableModule} from '../registeredtable/registeredtable.module';
import { EventTagTable } from './event_tagtable/event_tagtable.usecase';
import { EventGroupTable } from './event_grouptable/event_grouptable.usecase';


@Module({
  imports: [DbModule, RegisteredTableModule],
  controllers: [],
  providers: [EventTable, EventDatesTable, EventTagTable, EventGroupTable],
  exports: [EventTable],
})
export class EventtableModule {}
