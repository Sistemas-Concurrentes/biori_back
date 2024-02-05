import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { UsertableModel } from './model/usertable.model';


@Injectable()
export class UserTable {

  constructor(private dbConnection: DbConnection) {}

  async getUserByEmail(user_name:string): Promise<UsertableModel> {
    const query = 'SELECT * FROM user WHERE user_name = ? ';
    const user =  await this.dbConnection.runQuery(query, [user_name]);

    return new UsertableModel(user[0]);
  }
}
