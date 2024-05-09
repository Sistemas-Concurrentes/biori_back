import {Module} from '@nestjs/common';
import {DbModule} from '../db.module';
import {RegisteredTable} from './registeredtable.usecase';

@Module({
  imports: [DbModule],
  controllers: [],
  providers: [RegisteredTable],
  exports: [RegisteredTable],
})
export class RegisteredTableModule {
}
