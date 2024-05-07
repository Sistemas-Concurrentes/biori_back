import {Injectable} from '@nestjs/common';
import {DbConnection} from '../db.connection';

@Injectable()
export class StudenttableUsecase {
  constructor(private dbConnection: DbConnection) {
  }

  async getStudentIdByUserId(userId: number): Promise<number> {
    const query = 'SELECT id FROM student WHERE user_id = ?';
    const id = await this.dbConnection.runQuery(query, [userId]);

    return id.length > 0 ? id[0].id : 0;
  }
}