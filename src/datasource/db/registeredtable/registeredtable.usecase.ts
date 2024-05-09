import {Injectable} from '@nestjs/common';
import {DbConnection} from '../db.connection';

@Injectable()
export class RegisteredTable {
  constructor(private dbConnection: DbConnection) {
  }

  async insertRegisterEvent(
      eventId: number, dateEndInscription: Date): Promise<number> {
    try {
      const query = 'INSERT INTO event_with_register (id_event, date_end_inscription) VALUES (?,?)';
      const values = [eventId, dateEndInscription];
      return await this.dbConnection.runQuery(query, values);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getRegisterIdEventById(eventId: number): Promise<any> {
    try {
      const query = 'SELECT id FROM event_with_register WHERE id_event = ?';
      const values = [eventId];
      const response = await this.dbConnection.runQuery(query, values);

      return response.length > 0 ? response[0].id : -1;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}