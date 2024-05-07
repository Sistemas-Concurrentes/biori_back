import {Module} from '@nestjs/common';
import {DbModule} from '../db.module';
import {LikesTable} from './liketable.usecase';

@Module({
  imports: [DbModule],
  controllers: [],
  providers: [LikesTable],
  exports: [LikesTable],
})
export class LikesModule {
}
