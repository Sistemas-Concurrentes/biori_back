import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db/db.connection';


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
export class UserService {

  constructor(private dbConnection: DbConnection) {}

  async getQuery(query: string, params?: string[]) {
    let conn;
    try{
      const conn = await this.dbConnection.createConnection();

      return conn.query(query, params);
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.end();
    }
  }
  async getUsers(): Promise<User[]> {
    return await this.getQuery('SELECT * FROM user');

  }

  async getOneUser(user_name:string): Promise<User> {
    const query = 'SELECT * FROM user WHERE user_name = ? ';

    const conn = await this.dbConnection.createConnection();
    const user = await conn.query(query, [user_name]);

    return user[0] || {};
  }
}
