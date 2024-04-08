import { Module } from '@nestjs/common';
import { DbModule } from '../../db.module';
import { EventDatesTable } from './event_datestable.usecase';


@Module({
  imports: [ DbModule ],
  controllers: [],
  providers: [EventDatesTable],
  exports: [EventDatesTable],
})
export class EventDatesTableModule {}
