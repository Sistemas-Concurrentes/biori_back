import { Module } from '@nestjs/common';
import { DbModule } from '../db.module';
import { NoticeTable } from './noticetable.usecase';
import { GroupNoticeTable } from './groupnoticetable.usecase';


@Module({
  imports: [ DbModule ],
  controllers: [],
  providers: [NoticeTable, GroupNoticeTable],
  exports: [NoticeTable],
})
export class NoticetableModule {
}
