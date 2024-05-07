import {Module} from '@nestjs/common';
import {DbModule} from '../db.module';
import {StudenttableUsecase} from './studenttable.usecase';

@Module({
  imports: [DbModule],
  controllers: [],
  providers: [StudenttableUsecase],
  exports: [StudenttableUsecase],
})
export class StudentModule {
}
