import {Injectable} from '@nestjs/common';
import {DbConnection} from '../db.connection';

@Injectable()
export class StudentRegisteredTable {
  constructor(private dbConnection: DbConnection) {
  }

  async existsInscription(
      studentId: number, registerEventId: number): Promise<boolean> {
    try {
      const query = 'SELECT * FROM student_registered WHERE event_registered_id = ? AND student_id = ?';
      const values = [registerEventId, studentId];
      const response = await this.dbConnection.runQuery(query, values);

      return response.length > 0;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async addInscription(
      studentId: number, registerEventId: number): Promise<number> {
    try {
      const query = 'INSERT INTO student_registered (event_registered_id, student_id) VALUES (?, ?)';
      const values = [registerEventId, studentId];
      const response = await this.dbConnection.runQuery(query, values);

      return response.length > 0 ? response[0].id : -1;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}