import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { GroupAdvertisementModel } from './model/groupadvertisement.model';
import { GroupadvertisementDto } from './dto/groupadvertisement.dto';
import {TagModel} from '../tagtable/model/tag.model';


@Injectable()
export class GroupAdvertisementTable {
  constructor(private dbConnection: DbConnection) {
  }

  async getAll(): Promise<GroupAdvertisementModel> {
    const query = 'SELECT ga.*, g.name from group_advertisements ga INNER JOIN ' +
      'biori.group g ON ga.group_id = g.id ORDER BY ga.advertisement_id';
    const groupAdvsJson = await this.dbConnection.runQuery(query);

    const groupAdvsDtos =  groupAdvsJson.map((groupAdvsJson) => {
      return new GroupadvertisementDto(groupAdvsJson);
    });

    return new GroupAdvertisementModel(groupAdvsDtos);
  }

  async asignGroupsToAdvertisement(advertisementId: number, groups: number[]) {
    const placeholders = groups.map(() => '(?, ?)').join(', ');
    const query = `INSERT INTO group_advertisements (advertisement_id, group_id) VALUES ${placeholders}`;

    const values = groups.flatMap(group => [advertisementId, group]);
    return await this.dbConnection.runQuery(query, values);
  }

}