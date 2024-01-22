import { Injectable } from "@nestjs/common";
import { DbConnection } from "./db/db.connection";

@Injectable()
export class AppService {
  constructor(private dbConnection: DbConnection) {}

  getHello(): string {
    return 'Hello World!';
  }
  async getUsers() {
    let conn;
    try {
      conn = await this.dbConnection.createConnection();
      // console.log(rows);
      return await conn.query('SELECT * FROM users');
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.end();
    }
  }
}

// const service = new AppService(new MyDb());
