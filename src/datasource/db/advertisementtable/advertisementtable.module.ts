import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { Advertisementtable } from './advertisementtable.usecase';
import { GroupAdvertisementTable } from './groupadvertisementtable.usecase';


@Module({
  imports: [ DbModule ],
  controllers: [],
  providers: [Advertisementtable, GroupAdvertisementTable],
  exports: [Advertisementtable],
})
export class AdvertisementtableModule {}
