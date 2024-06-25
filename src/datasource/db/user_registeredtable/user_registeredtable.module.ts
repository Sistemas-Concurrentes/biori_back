import {Module} from '@nestjs/common';
import {DbModule} from '../db.module';
import { UserRegisteredTable } from './user_registeredtable.usecase';

@Module({
  imports: [DbModule],
  controllers: [],
  providers: [UserRegisteredTable],
  exports: [UserRegisteredTable],
})
export class UserRegisteredTableModule {
}
