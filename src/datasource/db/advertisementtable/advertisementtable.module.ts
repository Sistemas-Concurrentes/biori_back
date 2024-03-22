import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { Advertisementtable } from './advertisementtable.usecase';


@Module({
  imports: [ DbModule ],
  controllers: [],
  providers: [Advertisementtable],
  exports: [Advertisementtable],
})
export class AdvertisementtableModule {}
