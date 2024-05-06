import {Injectable} from '@nestjs/common';
import {DbConnection} from '../../db.connection';
import {EventDatesModel} from './model/eventdates.model';
import {EventDatesDto} from './dto/eventdates.dto';
import {UsefullMethods} from '../../usefull.methods';

@Injectable()
export class EventDatesTable {
  constructor(private dbConnection: DbConnection) {
  }

  async getAll(): Promise<EventDatesModel> {
    const query = 'SELECT * FROM event_dates';
    const eventDatesJson = await this.dbConnection.runQuery(query);

    const eventDatesDtos =  eventDatesJson.map((eventDateJson: any) => {
      return new EventDatesDto(eventDateJson);
    });

    return new EventDatesModel(eventDatesDtos);
  }

  async createEventDates(eventId: number, fechas: Date[]) {
    const placeholders = fechas.map(() => '(?, ?)').join(', ');
    const query = `INSERT INTO event_dates (event_id, dates_event) VALUES ${placeholders}`;

    const values = fechas.flatMap(
        fecha => [eventId, UsefullMethods.dateTimeToBdFormat(fecha)]);
    return await this.dbConnection.runQuery(query, values);

  }
}