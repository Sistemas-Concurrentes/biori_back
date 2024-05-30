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
    const groupAdvs: GroupnoticeModel = await this.groupAdvertisement.getAll();

    const query = 'select a.*, u.name, u.surname from notice a ' +
      'INNER JOIN user u on a.user_id = u.id';
    const advertisements = await this.dbConnection.runQuery(query);



    return advertisements.map((advertisement) => {
      if (groupAdvs.groupAdvertisements.has(advertisement.id))
        return new NoticeModel(advertisement,
          groupAdvs.groupAdvertisements.get(advertisement.id));
    }
    );

  }

  async createAdvertisement(advertisement: NoticeDto): Promise<void> {
    try {
      const query = 'INSERT INTO advertisement (title, description, user_id) ' +
          'VALUES (?, ?, ?);';

      const values = [
        advertisement.title, advertisement.description, advertisement.userId];
      const result = await this.dbConnection.runQuery(query, values);
      const advertisementId = result.insertId;

      await this.groupAdvertisement.asignGroupsToNotice(advertisementId,
          advertisement.groups);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

}