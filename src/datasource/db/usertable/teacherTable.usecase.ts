import {Injectable} from '@nestjs/common';
import {DbConnection} from '../db.connection';

@Injectable()
export class TeacherTable {

  constructor(private dbConnection: DbConnection) {
  }

  async getUserIdByTeacherId(teacherId: number): Promise<number> {
    const query = 'SELECT id FROM teacher WHERE user_id = ?';
    const id = await this.dbConnection.runQuery(query, [teacherId]);

    return id ? id[0].id : 0;
  }
}