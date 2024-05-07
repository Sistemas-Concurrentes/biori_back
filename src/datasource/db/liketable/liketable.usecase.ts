import {Injectable} from '@nestjs/common';
import {DbConnection} from '../db.connection';

@Injectable()
export class LikesTable {
  constructor(private dbConnection: DbConnection) {
  }

  async hasBeenLiked(eventId: number, studentId: number): Promise<boolean> {
    try {
      const query = 'SELECT * FROM likes_student_event WHERE event_id = ? AND student_id = ?';
      const values = [eventId, studentId];
      const likeStudentEvent = await this.dbConnection.runQuery(query, values);

      return likeStudentEvent.length > 0;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async addLike(
      eventId: number, studentId: number, isFollowed: boolean): Promise<void> {
    try {
      const query = 'INSERT INTO likes_student_event (event_id, student_id, is_followed) VALUES (?, ?, ?)';
      const values = [eventId, studentId, isFollowed];
      await this.dbConnection.runQuery(query, values);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async updateLike(
      eventId: number, studentId: number, isFollowed: boolean): Promise<void> {
    try {
      const query = 'UPDATE likes_student_event SET is_followed = ? WHERE event_id = ? AND student_id = ?';
      const values = [isFollowed, eventId, studentId];
      await this.dbConnection.runQuery(query, values);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}