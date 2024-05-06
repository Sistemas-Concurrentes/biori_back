import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { AdvertisementModel } from './model/advertisement.model';
import { GroupAdvertisementTable } from './groupadvertisementtable.usecase';
import { GroupAdvertisementModel } from './model/groupadvertisement.model';
import {AdvertisementDto} from './dto/advertisement.dto';


@Injectable()
export class Advertisementtable {
  constructor(private dbConnection: DbConnection,
              private groupAdvertisement: GroupAdvertisementTable) {
  }

  async getAll(): Promise<AdvertisementModel[]> {
    const groupAdvs:GroupAdvertisementModel = await this.groupAdvertisement.getAll();

    const query = 'select a.*, u.name, u.surname  from advertisement a ' +
      'INNER JOIN user u on a.user_id = u.id';
    const advertisements = await this.dbConnection.runQuery(query);



    return advertisements.map((advertisement) => {
      if (groupAdvs.groupAdvertisements.has(advertisement.id))
        return new AdvertisementModel(advertisement, groupAdvs.groupAdvertisements.get(advertisement.id));
    }
    );

  }

  async createAdvertisement(advertisement: AdvertisementDto): Promise<void> {
    try {
      const query = 'INSERT INTO advertisement (title, description, user_id) ' +
          'VALUES (?, ?, ?);';

      const values = [
        advertisement.title, advertisement.description, advertisement.userId];
      const result = await this.dbConnection.runQuery(query, values);
      const advertisementId = result.insertId;

      await this.groupAdvertisement.asignGroupsToAdvertisement(advertisementId,
          advertisement.groups);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

}