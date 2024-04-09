import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { EventModel } from './model/event.model';
import { EventDatesTable } from './event_datestable/event_datestable.usecase';


@Injectable()
export class EventTable {
  constructor(private dbConnection: DbConnection,
              private eventDatesTable: EventDatesTable) {
  }

  async getAll(): Promise<EventModel[]> {

    const query = 'SELECT e.*, r.date_end_inscription, COALESCE(l.likes_count, 0) as likes_count, u.name as organiser_name, u.surname as organiser_surname ' +
      'FROM event e ' +
      'LEFT JOIN event_with_register r on e.id = r.id_event ' +
      'LEFT JOIN (' +
        'SELECT event_id, COUNT(DISTINCT student_id) as likes_count ' +
        'FROM likes_student_event ' +
        'GROUP BY event_id' +
      ') l on e.id = l.event_id ' +
      'INNER JOIN teacher t on e.organiser = t.id ' +
      'INNER JOIN user u on t.user_id = u.id;';

    const events = await this.dbConnection.runQuery(query);

    const eventPromises = events.map(async (event: any) => {
      const eventDatesModel = await this.eventDatesTable.getDatesFromEvent(event.id);
      return new EventModel(event, eventDatesModel.eventDates);
    });

    return await Promise.all(eventPromises);
  }

}