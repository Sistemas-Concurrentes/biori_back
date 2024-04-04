import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { EventTable } from './eventtable.usecase';


@Module({
  imports: [ DbModule ],
  controllers: [],
  providers: [EventTable],
  exports: [EventTable],
})
export class EventtableModule {}
