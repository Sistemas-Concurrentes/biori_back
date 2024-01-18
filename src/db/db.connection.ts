import { Injectable } from '@nestjs/common';
import * as db from 'mariadb';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class DbConnection {
  async createConnection(): Promise<db.Connection> {
    const conn = await db.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: parseInt(process.env.DB_PORT),
    });

    return conn;
  }
}
