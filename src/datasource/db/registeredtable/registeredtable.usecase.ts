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
}