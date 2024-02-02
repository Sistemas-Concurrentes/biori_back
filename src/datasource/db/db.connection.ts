import { Injectable } from '@nestjs/common';
import * as db from 'mariadb';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class DbConnection {
  async createConnection(): Promise<db.Pool> {
    const conn =  db.createPool({
      connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT),
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: parseInt(process.env.DB_PORT),
    });

    return conn;
  }


  async runQuery(query: string, params?: any[]): Promise<any> {
    let conn;
    try {
      conn = await this.createConnection();
      return await conn.query(query, params);
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.end();
    }
  }

}
