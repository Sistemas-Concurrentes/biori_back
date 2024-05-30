import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { ReportTable } from './reporttable.usecase';
import { ReportCoursesTable } from './reportcoursestable.usecase';

@Module({
  imports: [ DbModule ],
  controllers: [],
  providers: [ReportTable, ReportCoursesTable],
  exports: [ReportTable],
})
export class ReportModule {}
