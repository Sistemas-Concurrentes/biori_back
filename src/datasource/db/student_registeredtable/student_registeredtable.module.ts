import {Module} from '@nestjs/common';
import {DbModule} from '../db.module';
import {StudentRegisteredTable} from './student_registeredtable.usecase';

@Module({
  imports: [DbModule],
  controllers: [],
  providers: [StudentRegisteredTable],
  exports: [StudentRegisteredTable],
})
export class StudentRegisteredTableModule {
}
