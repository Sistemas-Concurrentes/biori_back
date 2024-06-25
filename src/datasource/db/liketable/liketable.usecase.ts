import {Injectable} from '@nestjs/common';
import {DbConnection} from '../db.connection';

@Injectable()
export class LikesTable {
  constructor(private dbConnection: DbConnection) {
  }

  async hasBeenLiked(eventId: number, userId: number): Promise<boolean> {
    try {
      const query = 'SELECT * FROM likes_user_event WHERE event_id = ? AND user_id = ?';
      const values = [eventId, userId];
      const likeStudentEvent = await this.dbConnection.runQuery(query, values);

      return likeStudentEvent.length > 0;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async addLike(
    eventId: number, userId: number, isFollowed: boolean): Promise<void> {
    try {
      const query = 'INSERT INTO likes_user_event (event_id, user_id, is_followed) VALUES (?, ?, ?)';
      const values = [eventId, userId, isFollowed];
      await this.dbConnection.runQuery(query, values);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async updateLike(
    eventId: number, user_id: number, isFollowed: boolean): Promise<void> {
    try {
      const query = 'UPDATE likes_user_event SET is_followed = ? WHERE event_id = ? AND user_id = ?';
      const values = [isFollowed, eventId, user_id];
      await this.dbConnection.runQuery(query, values);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}