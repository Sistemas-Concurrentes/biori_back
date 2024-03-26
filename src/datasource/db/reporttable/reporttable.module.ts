import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { ReportTable } from './reporttable.usecase';

@Module({
  imports: [ DbModule ],
  controllers: [],
  providers: [ReportTable],
  exports: [ReportTable],
})
export class ReporttableModule {}
