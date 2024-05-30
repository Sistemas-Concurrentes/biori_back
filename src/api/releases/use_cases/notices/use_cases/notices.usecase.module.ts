import {Module} from '@nestjs/common';
import {
  UsertableModule,
} from '../../../../../datasource/db/usertable/usertable.module';
import { AddNoticesUsecase } from './add_notices.usecase';
import {
  NoticetableModule,
} from '../../../../../datasource/db/noticetable/noticetable.module';

@Module({
  imports: [
    UsertableModule,
    NoticetableModule,
  ],
  controllers: [],
  providers: [AddNoticesUsecase],
  exports: [AddNoticesUsecase],
})
export class NoticesUsecaseModule {
  constructor() {
  }
}
