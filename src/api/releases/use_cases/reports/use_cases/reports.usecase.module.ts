import {Module} from '@nestjs/common';
import {
  UsertableModule,
} from '../../../../../datasource/db/usertable/usertable.module';
import {
  ReportModule,
} from '../../../../../datasource/db/reporttable/reporttable.module';
import {AddReportUsecase} from './add_report.usecase';

@Module({
  imports: [
    UsertableModule,
    ReportModule,
  ],
  controllers: [],
  providers: [AddReportUsecase],
  exports: [AddReportUsecase],
})
export class ReportsUsecaseModule {
  constructor() {
  }
}
