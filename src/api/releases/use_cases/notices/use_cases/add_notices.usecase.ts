import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {
  TeacherTable,
} from '../../../../../datasource/db/usertable/teacherTable.usecase';
import {
  NoticeTable,
} from '../../../../../datasource/db/noticetable/noticetable.usecase';
import {
  NoticeDto,
} from '../../../../../datasource/db/noticetable/dto/notice.dto';
import { AddNoticeResult } from './dto/add_notice.result';
import { AddNoticesDto } from '../controller/dto/notices.dto';

@Injectable()
export class AddNoticesUsecase {

  constructor(
    private noticeTable: NoticeTable,
      private teacherTable: TeacherTable) {
  }

  async run(
    addNoticesDto: AddNoticesDto,
    userId: number): Promise<AddNoticeResult> {
    const isTeacher: boolean = await this.teacherTable.isUserATeacher(userId);
    if (!isTeacher) {
      throw new HttpException('Teacher not found', HttpStatus.FORBIDDEN);
    }

    const noticeDto: NoticeDto = {
      title: addNoticesDto.titulo,
      description: addNoticesDto.descripcion,
      userId: userId,
      groups: addNoticesDto.groups.map(group => group.id),
    };
    await this.noticeTable.createAdvertisement(noticeDto);

    return {
      titulo: addNoticesDto.titulo,
    };
  }
}


