import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { NoticeModel } from './model/notice.model';
import { GroupNoticeTable } from './groupnoticetable.usecase';
import { GroupnoticeModel } from './model/groupnotice.model';
import { NoticeDto } from './dto/notice.dto';


@Injectable()
export class NoticeTable {
  constructor(private dbConnection: DbConnection,
              private groupAdvertisement: GroupNoticeTable) {
  }

  async getAll(): Promise<NoticeModel[]> {
    const groupNoticeModel: GroupnoticeModel = await this.groupAdvertisement.getAll();

    const query = 'select a.*, u.name, u.surname from notice a ' +
      'INNER JOIN user u on a.user_id = u.id';
    const notices = await this.dbConnection.runQuery(query);

    return notices.map((notice) => {
        if (groupNoticeModel.groupAdvertisements.has(notice.id))
          return new NoticeModel(notice,
            groupNoticeModel.groupAdvertisements.get(notice.id));
    }
    );

  }

  async createAdvertisement(notice: NoticeDto): Promise<void> {
    try {
      const query = 'INSERT INTO notice (title, description, user_id) ' +
          'VALUES (?, ?, ?);';

      const values = [
        notice.title, notice.description, notice.userId];
      const result = await this.dbConnection.runQuery(query, values);
      const advertisementId = result.insertId;

      await this.groupAdvertisement.asignGroupsToNotice(advertisementId,
        notice.groups);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

}