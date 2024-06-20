import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { GroupnoticeModel } from './model/groupnotice.model';
import { GroupnoticeDto } from './dto/groupnotice.dto';


@Injectable()
export class GroupNoticeTable {
  constructor(private dbConnection: DbConnection) {
  }

  async getAll(): Promise<GroupnoticeModel> {
    const query = 'SELECT ga.*, g.name from group_notices ga INNER JOIN ' +
      '`group` g ON ga.group_id = g.id ORDER BY ga.notice_id';
    const groupAdvsJson = await this.dbConnection.runQuery(query);

    const groupNoticesDtos = groupNoticesJson.map((groupNoticeJson) => {
      return new GroupnoticeDto(groupNoticeJson);
    });

    return new GroupnoticeModel(groupNoticesDtos);
  }

  async asignGroupsToNotice(noticeId: number, groups: number[]) {
    const placeholders = groups.map(() => '(?, ?)').join(', ');
    const query = `INSERT INTO group_notices (notice_id, group_id) VALUES ${placeholders}`;

    const values = groups.flatMap(group => [noticeId, group]);
    return await this.dbConnection.runQuery(query, values);
  }

}