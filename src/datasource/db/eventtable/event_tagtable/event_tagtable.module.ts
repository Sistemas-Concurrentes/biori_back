import { Module } from '@nestjs/common';
import { DbModule } from '../../db.module';
import { EventTagTable } from './event_tagtable.usecase';


@Module({
  imports: [ DbModule ],
  controllers: [],
  providers: [EventTagTable],
  exports: [EventTagTable],
})
export class EventDatesTableModule {}
