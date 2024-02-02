import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { UserTable } from './usertable.usecase';


@Module({
  imports: [ DbModule],
  controllers: [],
  providers: [UserTable],
  exports: [UserTable],
})
export class UsertableModule {}
