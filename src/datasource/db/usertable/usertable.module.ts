import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { UserTable } from './usertable.usecase';
import {TeacherTable} from './teacherTable.usecase';


@Module({
  imports: [ DbModule],
  controllers: [],
  providers: [UserTable, TeacherTable],
  exports: [UserTable, TeacherTable],
})
export class UsertableModule {}
