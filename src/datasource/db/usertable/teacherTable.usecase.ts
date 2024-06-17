import {Injectable} from '@nestjs/common';
import {DbConnection} from '../db.connection';

@Injectable()
export class TeacherTable {

  constructor(private dbConnection: DbConnection) {
  }

  async isUserATeacher(teacherId: number): Promise<boolean> {
    const query = 'SELECT id FROM teacher';
    const id = await this.dbConnection.runQuery(query, [teacherId]);

    return id.length > 0;
  }
}