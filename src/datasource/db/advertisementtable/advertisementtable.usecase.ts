import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { AdvertisementModel } from './model/advertisement.model';


@Injectable()
export class Advertisementtable {
  constructor(private dbConnection: DbConnection) {
  }

  async getAll(): Promise<Array<AdvertisementModel>> {
    const query = 'select a.*, u.name, u.surname  from advertisement a ' +
      'INNER JOIN user u on a.user_id = u.id';
    const advertisements = await this.dbConnection.runQuery(query);

    return advertisements.map((advertisement) => new AdvertisementModel(advertisement));

  }

}