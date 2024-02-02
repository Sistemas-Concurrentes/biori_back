import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';

export interface User {
  id: number;
  name: string;
  surname: string;
  user_name: string;
  birth_date: Date;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

@Injectable()
export class UserTable {

  constructor(private dbConnection: DbConnection) {}

  async getUserByEmail(user_name:string): Promise<User> {
    const query = 'SELECT * FROM user WHERE user_name = ? ';
    const user = await this.dbConnection.runQuery(query, [user_name])

    return user[0] || {};
  }
}
